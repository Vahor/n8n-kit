# @vahor/n8n-kit

## 0.2.2

### Patch Changes

- [#52](https://github.com/Vahor/n8n-kit/pull/52) [`cc635e4`](https://github.com/Vahor/n8n-kit/commit/cc635e4f2c066fabee253c15c19c82e86b256a2f) Thanks [@Vahor](https://github.com/Vahor)! - Adds new typed methods in the ExpressionBuilder `# @vahor/n8n-kit.

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

## 0.2.1

### Patch Changes

- [#50](https://github.com/Vahor/n8n-kit/pull/50) [`2217829`](https://github.com/Vahor/n8n-kit/commit/221782925a063377d8cdf89ebe6c121a65556ae8) Thanks [@Vahor](https://github.com/Vahor)! - Add { preserveChainConnections: boolean} option to clone method (breaking)

## 0.2.0

### Minor Changes

- [#47](https://github.com/Vahor/n8n-kit/pull/47) [`ddc79b7`](https://github.com/Vahor/n8n-kit/commit/ddc79b752dab214c39d0dfc019db5f76dbb7c62a) Thanks [@Vahor](https://github.com/Vahor)! - Add `import` command. Use it to generate a typescript file based on a n8n workflow

## 0.1.3

### Patch Changes

- [#44](https://github.com/Vahor/n8n-kit/pull/44) [`04a27b4`](https://github.com/Vahor/n8n-kit/commit/04a27b4f34071428c2dc4a677eb55d1edcda7c23) Thanks [@Vahor](https://github.com/Vahor)! - Add node clone method - keeping type

- [#42](https://github.com/Vahor/n8n-kit/pull/42) [`57a65e3`](https://github.com/Vahor/n8n-kit/commit/57a65e3ce8c00c14f2a7ce2abb0648f88040bb0b) Thanks [@Vahor](https://github.com/Vahor)! - remove default value for Id in generated nodes

- [#44](https://github.com/Vahor/n8n-kit/pull/44) [`04a27b4`](https://github.com/Vahor/n8n-kit/commit/04a27b4f34071428c2dc4a677eb55d1edcda7c23) Thanks [@Vahor](https://github.com/Vahor)! - preserve Context and Ids passed through true/false in if node

- [#45](https://github.com/Vahor/n8n-kit/pull/45) [`44213de`](https://github.com/Vahor/n8n-kit/commit/44213de27009f1187828f941959109d33176e8cb) Thanks [@Vahor](https://github.com/Vahor)! - Add support for types in n8n fixedCollection properties

- [#45](https://github.com/Vahor/n8n-kit/pull/45) [`44213de`](https://github.com/Vahor/n8n-kit/commit/44213de27009f1187828f941959109d33176e8cb) Thanks [@Vahor](https://github.com/Vahor)! - add support for multipleValues typeOption on n8n fields

## 0.1.2

### Patch Changes

- [`2083f66`](https://github.com/Vahor/n8n-kit/commit/2083f6677a71481d7f974a9e7befc521600d87b3) Thanks [@Vahor](https://github.com/Vahor)! - fix mts file export and cli bundle size

## 0.1.1

### Patch Changes

- [#24](https://github.com/Vahor/n8n-kit/pull/24) [`5185951`](https://github.com/Vahor/n8n-kit/commit/5185951586e81dd56ea3de6ea645588fd0319795) Thanks [@Vahor](https://github.com/Vahor)! - Allow users to set Context type in generated nodes

- [#32](https://github.com/Vahor/n8n-kit/pull/32) [`38b433b`](https://github.com/Vahor/n8n-kit/commit/38b433b1a46b57ff9050c6d76aa84e691655f942) Thanks [@Vahor](https://github.com/Vahor)! - Replace references of workflow ids during deployment

- [#20](https://github.com/Vahor/n8n-kit/pull/20) [`b9691fa`](https://github.com/Vahor/n8n-kit/commit/b9691face3605073254b00d4b2b8eb9231bfa6a2) Thanks [@Vahor](https://github.com/Vahor)! - fix custom tags creation

- [#23](https://github.com/Vahor/n8n-kit/pull/23) [`54481e1`](https://github.com/Vahor/n8n-kit/commit/54481e14594f65d3eb6f1b7d7edc5f7fe48a283d) Thanks [@Vahor](https://github.com/Vahor)! - remove BaseNode class

## 0.1.0

### Minor Changes

- [#6](https://github.com/Vahor/n8n-kit/pull/6) [`3d88393`](https://github.com/Vahor/n8n-kit/commit/3d88393cbf164e6fdeadab5e2facb58458042e82) Thanks [@Vahor](https://github.com/Vahor)! - Autogenerate nodes/credentials. Add complex example using ai and multiple triggers
