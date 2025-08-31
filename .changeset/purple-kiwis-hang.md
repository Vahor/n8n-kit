---
"@vahor/n8n-kit": patch
---

Add autocomplete on `credentialsSelect` properties (ex: `genericAuthType` in HttpRequest node). This might autocomplete values not available on n8n but will raise an error on totally invalid ones, so better than nothing.
