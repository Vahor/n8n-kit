This directory contains required tests for some n8n nodes.

As we are creating new instances of nodes sometimes we need files.
ex
```txt
DocumentDefaultDataLoader
10 |
11 | //for testing purpose
12 | if (isDebugMode) {
13 |
14 |     let PDF_FILE = './test/data/05-versions-space.pdf';
15 |     let dataBuffer = Fs.readFileSync(PDF_FILE);
                             ^
ENOENT: no such file or directory, open './test/data/05-versions-space.pdf'
    path: "./test/data/05-versions-space.pdf",
 syscall: "open",
   errno: -2,
    code: "ENOENT"

      at <anonymous> (/Users/nathan/dev/vahor/n8n-kit/node_modules/pdf-parse/index.js:15:25)

../vendor/n8n/packages/@n8n/nodes-langchain/nodes/document_loaders/DocumentDefaultDataLoader/DocumentDefaultDataLoader.node.ts
```

init failed as it required a test file


Note: files don't even need to be valid, a simple empty file will do
