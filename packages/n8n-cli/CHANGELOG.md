# @vahor/n8n-kit-cli

## 0.4.11

### Patch Changes

- [#124](https://github.com/Vahor/n8n-kit/pull/124) [`42c8d01`](https://github.com/Vahor/n8n-kit/commit/42c8d01cad287d4dbe0569ff7abe11d9682aa661) Thanks [@Vahor](https://github.com/Vahor)! - `--version` now return the correct version (previously `unknown`)

## 0.4.10

### Patch Changes

- Updated dependencies [[`4805783`](https://github.com/Vahor/n8n-kit/commit/4805783ebe41c0b67a3c73e92aacacc8d7e1c258)]:
  - @vahor/n8n-kit@0.7.0

## 0.4.9

### Patch Changes

- Updated dependencies [[`9532ae0`](https://github.com/Vahor/n8n-kit/commit/9532ae09d8c109f230600d73be6a35ab2d23cc78)]:
  - @vahor/n8n-kit@0.6.1

## 0.4.8

### Patch Changes

- Updated dependencies [[`8bfcce6`](https://github.com/Vahor/n8n-kit/commit/8bfcce6574170c0641162ab5e8fd2b758d15dc7b)]:
  - @vahor/n8n-kit@0.6.0

## 0.4.7

### Patch Changes

- Updated dependencies [[`bbec2a3`](https://github.com/Vahor/n8n-kit/commit/bbec2a3e6aeec6c0de92b3c47bdc308900a3a0d2)]:
  - @vahor/n8n-kit@0.5.3

## 0.4.6

### Patch Changes

- Updated dependencies [[`7427a48`](https://github.com/Vahor/n8n-kit/commit/7427a48e2febd8b19738ab6e9cc874c6611b8aa2)]:
  - @vahor/n8n-kit@0.5.2

## 0.4.5

### Patch Changes

- [`6b75854`](https://github.com/Vahor/n8n-kit/commit/6b7585492e674c88abde529b065b2cbe5a34f90a) Thanks [@Vahor](https://github.com/Vahor)! - ignore lockfile in watch mode

## 0.4.4

### Patch Changes

- Updated dependencies [[`2a9a2df`](https://github.com/Vahor/n8n-kit/commit/2a9a2dfeec3d5fcf0598b90c1137ecffd66302a9), [`d0cbbe5`](https://github.com/Vahor/n8n-kit/commit/d0cbbe582a5e0977421f7344195b9c628874473c), [`869dee8`](https://github.com/Vahor/n8n-kit/commit/869dee8c059b1aee52946d867f0be0d3d9647315)]:
  - @vahor/n8n-kit@0.5.1

## 0.4.3

### Patch Changes

- [`30a8804`](https://github.com/Vahor/n8n-kit/commit/30a8804f15c709d2ecb167dbebff619138c88836) Thanks [@Vahor](https://github.com/Vahor)! - Import using a different cache key so that watch mode starts from the begining

## 0.4.2

### Patch Changes

- [#90](https://github.com/Vahor/n8n-kit/pull/90) [`759881f`](https://github.com/Vahor/n8n-kit/commit/759881f651a1cbae67e53f284715d61fc497d48f) Thanks [@Vahor](https://github.com/Vahor)! - Add `--watch` flag on build and deploy commands

- Updated dependencies [[`ff4c520`](https://github.com/Vahor/n8n-kit/commit/ff4c520e87e6db717abc033b86a7372b23492d81), [`756a7a1`](https://github.com/Vahor/n8n-kit/commit/756a7a1aa75538505d18d7c41e240577baa9e0fb)]:
  - @vahor/n8n-kit@0.5.0

## 0.4.1

### Patch Changes

- Updated dependencies [[`9d5171d`](https://github.com/Vahor/n8n-kit/commit/9d5171d3f871b396c4040915681b211010fcb04a)]:
  - @vahor/n8n-kit@0.4.1

## 0.4.0

### Minor Changes

- [#74](https://github.com/Vahor/n8n-kit/pull/74) [`976a0a9`](https://github.com/Vahor/n8n-kit/commit/976a0a9de63ae0f16097041eab1bbc7de8a77918) Thanks [@Vahor](https://github.com/Vahor)! - Add `projectId` in config file, currently used as a salt in the workflow hashId generation

### Patch Changes

- [#75](https://github.com/Vahor/n8n-kit/pull/75) [`d5ae2b0`](https://github.com/Vahor/n8n-kit/commit/d5ae2b050abc89951a4144c4884790983b380ab2) Thanks [@Vahor](https://github.com/Vahor)! - Add `Workflow.import` method to import an existing n8n workflow into your app. (ex: to use in ExecuteWorkflow)

- [#70](https://github.com/Vahor/n8n-kit/pull/70) [`1d01592`](https://github.com/Vahor/n8n-kit/commit/1d0159268c127d762de6bc2396b2bb8dbc89f4c5) Thanks [@Vahor](https://github.com/Vahor)! - Add a `--sort` option to the build command to output JSON that is easily diffable.

- [#63](https://github.com/Vahor/n8n-kit/pull/63) [`98a73ee`](https://github.com/Vahor/n8n-kit/commit/98a73ee26e295504c723b8d20c068e9dd55c0890) Thanks [@Vahor](https://github.com/Vahor)! - Move if parameters inside a `parameters` object to keep the same pattern as other nodes

- Updated dependencies [[`1a9d3dd`](https://github.com/Vahor/n8n-kit/commit/1a9d3dddff47fca9e34aab9107c0dee7176aea29), [`98a73ee`](https://github.com/Vahor/n8n-kit/commit/98a73ee26e295504c723b8d20c068e9dd55c0890), [`1c37767`](https://github.com/Vahor/n8n-kit/commit/1c377671c54eac93676e5ef1154db636c8d54b3e), [`976a0a9`](https://github.com/Vahor/n8n-kit/commit/976a0a9de63ae0f16097041eab1bbc7de8a77918), [`98a73ee`](https://github.com/Vahor/n8n-kit/commit/98a73ee26e295504c723b8d20c068e9dd55c0890), [`1c37767`](https://github.com/Vahor/n8n-kit/commit/1c377671c54eac93676e5ef1154db636c8d54b3e), [`8c012c9`](https://github.com/Vahor/n8n-kit/commit/8c012c91ba8449dee3cdaa3e82fffab19499b939), [`506c8a9`](https://github.com/Vahor/n8n-kit/commit/506c8a9ef95a7d0ee283b42242dbe02a97f2d48b), [`d5ae2b0`](https://github.com/Vahor/n8n-kit/commit/d5ae2b050abc89951a4144c4884790983b380ab2), [`98a73ee`](https://github.com/Vahor/n8n-kit/commit/98a73ee26e295504c723b8d20c068e9dd55c0890), [`1d01592`](https://github.com/Vahor/n8n-kit/commit/1d0159268c127d762de6bc2396b2bb8dbc89f4c5)]:
  - @vahor/n8n-kit@0.4.0

## 0.3.0

### Minor Changes

- [#55](https://github.com/Vahor/n8n-kit/pull/55) [`d21e800`](https://github.com/Vahor/n8n-kit/commit/d21e800eb8c504bdc9c04f54b20c487d42f09c0c) Thanks [@Vahor](https://github.com/Vahor)! - Add `NodejsFunction` class to bundle js code in a `Code` node

### Patch Changes

- Updated dependencies [[`d21e800`](https://github.com/Vahor/n8n-kit/commit/d21e800eb8c504bdc9c04f54b20c487d42f09c0c)]:
  - @vahor/n8n-kit@0.3.0

## 0.2.2

### Patch Changes

- Updated dependencies [[`cc635e4`](https://github.com/Vahor/n8n-kit/commit/cc635e4f2c066fabee253c15c19c82e86b256a2f)]:
  - @vahor/n8n-kit@0.2.2

## 0.2.1

### Patch Changes

- Updated dependencies [[`2217829`](https://github.com/Vahor/n8n-kit/commit/221782925a063377d8cdf89ebe6c121a65556ae8)]:
  - @vahor/n8n-kit@0.2.1

## 0.2.0

### Minor Changes

- [#47](https://github.com/Vahor/n8n-kit/pull/47) [`ddc79b7`](https://github.com/Vahor/n8n-kit/commit/ddc79b752dab214c39d0dfc019db5f76dbb7c62a) Thanks [@Vahor](https://github.com/Vahor)! - Add `import` command. Use it to generate a typescript file based on a n8n workflow

### Patch Changes

- Updated dependencies [[`ddc79b7`](https://github.com/Vahor/n8n-kit/commit/ddc79b752dab214c39d0dfc019db5f76dbb7c62a)]:
  - @vahor/n8n-kit@0.2.0

## 0.1.3

### Patch Changes

- Updated dependencies [[`04a27b4`](https://github.com/Vahor/n8n-kit/commit/04a27b4f34071428c2dc4a677eb55d1edcda7c23), [`57a65e3`](https://github.com/Vahor/n8n-kit/commit/57a65e3ce8c00c14f2a7ce2abb0648f88040bb0b), [`04a27b4`](https://github.com/Vahor/n8n-kit/commit/04a27b4f34071428c2dc4a677eb55d1edcda7c23), [`44213de`](https://github.com/Vahor/n8n-kit/commit/44213de27009f1187828f941959109d33176e8cb), [`44213de`](https://github.com/Vahor/n8n-kit/commit/44213de27009f1187828f941959109d33176e8cb)]:
  - @vahor/n8n-kit@0.1.3

## 0.1.2

### Patch Changes

- [`2083f66`](https://github.com/Vahor/n8n-kit/commit/2083f6677a71481d7f974a9e7befc521600d87b3) Thanks [@Vahor](https://github.com/Vahor)! - fix mts file export and cli bundle size

- Updated dependencies [[`2083f66`](https://github.com/Vahor/n8n-kit/commit/2083f6677a71481d7f974a9e7befc521600d87b3)]:
  - @vahor/n8n-kit@0.1.2

## 0.1.1

### Patch Changes

- [#32](https://github.com/Vahor/n8n-kit/pull/32) [`38b433b`](https://github.com/Vahor/n8n-kit/commit/38b433b1a46b57ff9050c6d76aa84e691655f942) Thanks [@Vahor](https://github.com/Vahor)! - Replace references of workflow ids during deployment

- [#20](https://github.com/Vahor/n8n-kit/pull/20) [`b9691fa`](https://github.com/Vahor/n8n-kit/commit/b9691face3605073254b00d4b2b8eb9231bfa6a2) Thanks [@Vahor](https://github.com/Vahor)! - fix custom tags creation

- [#30](https://github.com/Vahor/n8n-kit/pull/30) [`e49d505`](https://github.com/Vahor/n8n-kit/commit/e49d50503262e941ff32b8487d2c1d02c5c11c9d) Thanks [@Vahor](https://github.com/Vahor)! - Add a `--merge` option to the deploy command to preserve n8n node positions during deployment (enabled by default; pass `--no-merge` to disable).

- [#33](https://github.com/Vahor/n8n-kit/pull/33) [`24b1d80`](https://github.com/Vahor/n8n-kit/commit/24b1d80a79b7af664ccd3763c210205e4e47e22f) Thanks [@Vahor](https://github.com/Vahor)! - Add `diff` command

- Updated dependencies [[`5185951`](https://github.com/Vahor/n8n-kit/commit/5185951586e81dd56ea3de6ea645588fd0319795), [`38b433b`](https://github.com/Vahor/n8n-kit/commit/38b433b1a46b57ff9050c6d76aa84e691655f942), [`b9691fa`](https://github.com/Vahor/n8n-kit/commit/b9691face3605073254b00d4b2b8eb9231bfa6a2), [`54481e1`](https://github.com/Vahor/n8n-kit/commit/54481e14594f65d3eb6f1b7d7edc5f7fe48a283d)]:
  - @vahor/n8n-kit@0.1.1

## 0.1.0

### Minor Changes

- [#6](https://github.com/Vahor/n8n-kit/pull/6) [`3d88393`](https://github.com/Vahor/n8n-kit/commit/3d88393cbf164e6fdeadab5e2facb58458042e82) Thanks [@Vahor](https://github.com/Vahor)! - Autogenerate nodes/credentials. Add complex example using ai and multiple triggers

### Patch Changes

- Updated dependencies [[`3d88393`](https://github.com/Vahor/n8n-kit/commit/3d88393cbf164e6fdeadab5e2facb58458042e82)]:
  - @vahor/n8n-kit@0.1.0
