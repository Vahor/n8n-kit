---
"@vahor/n8n-kit": patch
---

Adds new typed methods in the ExpressionBuilder `$`.

Array methods:

- `find`
- `filter`
- `join`
- `first`
- `last`

String methods:

- `toLowerCase`
- `toUpperCase`
- `trim`
- `split`

These methods are simply typed versions of the equivalent `.call("methodName")` calls.

For example.

```ts
// context is { data: Array<{ element: { name: string } }> }
$("data").first((d) => d.element.name.toLowerCase().startsWith("a"));
```

will be transformed to

```txt
{{ $('data').first((d) => d.element.name.toLowerCase().startsWith("a")) }}
```

Note that here `d` is correctly typed as `{ element: { name: string } }`.
