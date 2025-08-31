---
"@vahor/n8n-kit": patch
---

Add TypeScript autocomplete for `credentialsSelect` properties (e.g., `genericAuthType` in HttpRequest). The type now narrows to `N8nCredentialsUnion["__name"]`. This may suggest credentials not present in a given n8n instance, but invalid values will fail at compile time.
