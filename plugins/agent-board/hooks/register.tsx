import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Job } from '../types'

const PANE = 'agent-board'
const jobs = atom({ plugin: 'agent-board', key: 'jobs' } as const, [], {
  shape: 'jobs-1',
})

const openPane = ($: EngineInterface) =>
  $.ui.open({ id: PANE, title: 'Agent board' })

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'board',
      description: 'Open the agent board pane',
    })
    void openPane($)
    $.ui.status('board: ready')
    return next(e)
  })

  on('command.run', { command: 'board' }, async $ => {
    await openPane($)
    return { text: 'Agent board opened.' }
  })

  on('tool.call', async ($, e, next) => {
    const isAgent = e.tool === 'Agent'
    const label = isAgent
      ? `${(e as any).subagent_type ?? 'agent'}: ${(e as any).description ?? ''}`
      : e.tool
    const job: Job = {
      id: e.tool_use_id,
      kind: isAgent ? 'agent' : 'tool',
      label,
      isDone: false,
      isError: false,
    }
    await update($, jobs, list => [...list, job].slice(-200))
    const ran = await next(e)
    const failed = ran.deny !== undefined || ran.isError === true
    await update($, jobs, l =>
      l.map(j => (j.id === job.id ? { ...j, isDone: true, isError: failed } : j)),
    )
    const live = (await read($, jobs)).filter(j => !j.isDone).length
    $.ui.status(`board: ${live} running`)
    return ran
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Text } = $.ui.resolve(e)
    const list = await read($, jobs)
    const agents = list.filter(j => j.kind === 'agent')
    const tools = list.filter(j => j.kind === 'tool')
    const room = Math.max(1, (e.viewport?.rows ?? 24) - 8 - agents.length)
    const mark = (j: Job) => (j.isError ? 'fail' : j.isDone ? 'done' : 'runs')

    return (
      <Box flexDirection="column">
        <Text bold>Agents ({agents.filter(j => !j.isDone).length} running)</Text>
        {agents.length === 0 && <Text dimColor>No agents yet.</Text>}
        {agents.slice(-10).map(j => (
          <Text dimColor={j.isDone}>{mark(j)} {j.label}</Text>
        ))}
        <Text bold>Tools ({tools.length} calls)</Text>
        {tools.length === 0 && <Text dimColor>No tool calls yet.</Text>}
        {tools.slice(-room).map(j => (
          <Text dimColor={j.isDone}>{mark(j)} {j.label}</Text>
        ))}
      </Box>
    )
  })
}
