export type Job = {
  id: string
  kind: 'agent' | 'tool'
  label: string
  isDone: boolean
  isError: boolean
}

declare module 'claude-code' {
  interface PluginState {
    'agent-board': { jobs: Shaped<Job[]> }
  }
}
