# Errors Log

Command failures, exceptions, and unexpected behaviors.

---

## [ERR-20260304-002] aisa_youtube_ssl_retry_exceeded

**Logged**: 2026-03-04T15:40:39+08:00
**Priority**: high
**Status**: pending
**Area**: infra

### Summary
Pipeline aborted during AISA YouTube API call due SSL handshake/retry failure.

### Error
```
requests.exceptions.SSLError: HTTPSConnectionPool(host='api.aisa.one', port=443): Max retries exceeded with url: /apis/v1/youtube/search ...
```

### Context
- Long-running pipeline hit transient network/TLS issue while processing topic `03_ai_inside_enterprise` YouTube step.
- Upstream steps for topic 01/02 completed; topic 03 partial.

### Suggested Fix
Add retry with exponential backoff + resume from checkpoint (skip completed topics/files).

### Metadata
- Reproducible: unknown
- Related Files: /Users/liuyuan/workspace/openclaw-data/ai_research/run_research_pipeline.py

---

## [ERR-20260304-003] resume_collect_syntax_error

**Logged**: 2026-03-04T15:48:30+08:00
**Priority**: medium
**Status**: resolved
**Area**: config

### Summary
New resume script failed to start due Python string quote typo in TOPICS config.

### Error
```
SyntaxError: unterminated string literal (detected at line 15)
```

### Context
- Command: `/Users/liuyuan/miniforge3/bin/python3 /Users/liuyuan/workspace/openclaw-data/ai_research/resume_collect.py`
- Root cause: malformed key `'yt_queries'`.

### Suggested Fix
Correct quote typo; rerun script.

### Metadata
- Reproducible: yes
- Related Files: /Users/liuyuan/workspace/openclaw-data/ai_research/resume_collect.py

### Resolution
- **Resolved**: 2026-03-04T15:49:00+08:00
- **Notes**: fixed config key quoting and restarted task.

---

## [ERR-20260304-001] research_pipeline_missing_requests

**Logged**: 2026-03-04T15:34:00+08:00
**Priority**: high
**Status**: pending
**Area**: infra

### Summary
Research pipeline failed immediately because Python dependency `requests` was missing.

### Error
```
Traceback (most recent call last):
  File "/Users/liuyuan/workspace/openclaw-data/ai_research/run_research_pipeline.py", line 4, in <module>
    import requests
ModuleNotFoundError: No module named 'requests'
```

### Context
- Command: `python3 /Users/liuyuan/workspace/openclaw-data/ai_research/run_research_pipeline.py`
- Runtime default `python3` environment did not include `requests`.
- User confirmed to continue execution.

### Suggested Fix
Use `/Users/liuyuan/miniforge3/bin/python3` and/or install dependency in active environment (`python3 -m pip install requests`).

### Metadata
- Reproducible: yes
- Related Files: /Users/liuyuan/workspace/openclaw-data/ai_research/run_research_pipeline.py

---
