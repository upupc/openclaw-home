# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.

### Media send staging

- When sending media from `~/workspace/openclaw-data`, first copy it into `~/workspace/openclaw-workspace/tmp/` and send from there.
- Preferred staging dir: `/Users/liuyuan/workspace/openclaw-workspace/tmp/`

### Scrapling

- Dedicated venv: `/Users/liuyuan/workspace/openclaw-data/scrapling-official/venv`
- Preferred `scrapling` binary: `/Users/liuyuan/workspace/openclaw-data/scrapling-official/venv/bin/scrapling`
- Preferred Python: `/Users/liuyuan/workspace/openclaw-data/scrapling-official/venv/bin/python`
