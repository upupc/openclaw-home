# Learnings

Corrections, insights, and knowledge gaps captured during development.

**Categories**: correction | insight | knowledge_gap | best_practice
**Areas**: frontend | backend | infra | tests | docs | config
**Statuses**: pending | in_progress | resolved | wont_fix | promoted | promoted_to_skill

## Status Definitions

| Status | Meaning |
|--------|---------|
| `pending` | Not yet addressed |
| `in_progress` | Actively being worked on |
| `resolved` | Issue fixed or knowledge integrated |
| `wont_fix` | Decided not to address (reason in Resolution) |
| `promoted` | Elevated to CLAUDE.md, AGENTS.md, or copilot-instructions.md |
| `promoted_to_skill` | Extracted as a reusable skill |

## Skill Extraction Fields

When a learning is promoted to a skill, add these fields:

```markdown
**Status**: promoted_to_skill
**Skill-Path**: skills/skill-name
```

Example:
```markdown
## [LRN-20250115-001] best_practice

**Logged**: 2025-01-15T10:00:00Z
**Priority**: high
**Status**: promoted_to_skill
**Skill-Path**: skills/docker-m1-fixes
**Area**: infra

### Summary
Docker build fails on Apple Silicon due to platform mismatch
...
```

---

## [LRN-20260302-001] best_practice

**Logged**: 2026-03-02T15:28:04Z
**Priority**: medium
**Status**: resolved
**Area**: config

### Summary
self-improving-agent 初始化完成并已在 OpenClaw 启用。

### Details
已创建工作区 `.learnings/` 日志文件（LEARNINGS/ERRORS/FEATURE_REQUESTS），并将 `self-improvement` hook 安装到 `~/.openclaw/hooks/self-improvement`，随后通过 `openclaw hooks enable self-improvement` 启用。`openclaw hooks list` 显示 hook 状态为 ready。

### Suggested Action
后续每次命令失败、用户纠正或发现更优流程时，及时追加到 `.learnings/`，并按需提升到 AGENTS.md / TOOLS.md / SOUL.md。

### Metadata
- Source: conversation
- Related Files: .learnings/LEARNINGS.md, .learnings/ERRORS.md, .learnings/FEATURE_REQUESTS.md
- Tags: self-improvement, initialization, openclaw-hooks

### Resolution
- **Resolved**: 2026-03-02T15:28:04Z
- **Commit/PR**: pending
- **Notes**: 初始化步骤已完成并通过 hooks list 验证。

---

## [LRN-20260304-001] best_practice

**Logged**: 2026-03-04T10:38:00Z
**Priority**: high
**Status**: pending
**Area**: config

### Summary
Git 提交必须使用 git-push 技能，不能直接使用 git 命令

### Details
用户明确要求：当需要提交 Git 时，必须使用 `skills/git-push/scripts/git-push.js` 技能，而不是直接执行 `git add` + `git commit` + `git push`。

### Suggested Action
所有 Git 提交操作统一使用：
```bash
node skills/git-push/scripts/git-push.js
# 或
node skills/git-push/scripts/git-push.js "自定义提交信息"
```

### Metadata
- Source: user_requirement
- Related Files: skills/git-push/SKILL.md
- Tags: git, workflow, git-push-skill

---
