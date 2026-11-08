# agent-board

A Claude Code mod that runs on every session. It opens an **Agent board** pane
beside the chat that lists each subagent Claude spawns (type and task) and the
recent tool calls, each marked runs, done or fail. The status line shows how
many are running. Type `/board` to open the pane again.

## Install

At the prompt of a Claude Code session:

```
/plugin install agent-board --marketplace saner108/Saner108
```

From a shell:

```
claude plugin install agent-board --marketplace saner108/Saner108
```

Choose the **user** scope to load it in every session on that computer.
