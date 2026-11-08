# Claude instructions for this repo

## agent-board mod (always on)

This repo ships the `agent-board` mod in `plugins/agent-board/`. It opens an
"Agent board" pane at the start of every session that lists each subagent and
tool call (runs / done / fail) and shows `board: N running` in the status line.

- `.claude/settings.json` registers the `saner108` marketplace and enables
  `agent-board@saner108`, so cloud and local sessions in this repo load it.
- If the pane is not open, run `/board`.
- If the mod is not loaded, install it:
  `/plugin install agent-board --marketplace saner108/Saner108`
- When changing the mod, edit `plugins/agent-board/hooks/register.tsx`, run
  `claude plugin validate plugins/agent-board`, and bump `version` in
  `plugins/agent-board/.claude-plugin/plugin.json`.
