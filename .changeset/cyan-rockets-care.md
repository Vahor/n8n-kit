---
"@vahor/n8n-kit": patch
---

set default values for `sendBody`, `sendHeaders` and `specifyBody` in HttpRequest based on the other parameters

Example if we set `jsonBody` this automatically sets `specifyBody` to `json` and `sendBody` to `true`.
