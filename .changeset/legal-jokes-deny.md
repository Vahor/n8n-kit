---
"@vahor/n8n-kit": patch
---

Add `JsonExpression` helper to build JSON stringified expressions.

Example:

```ts
JsonExpression.from({
  value: $("data.value"),
}).toExpression();
```

results in `={ "value": {{ $data.item.json.value }} }`
