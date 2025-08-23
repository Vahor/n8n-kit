# TODO:

- Add more nodes (check if we can generate them)
- Add more examples (with screenshots)
- Add README.md in each package
- Add more tests ( and type tests)
- Call to subworkflow with correct input parameters.

- Add CONTRIBUTING.md

- Add a way to place sticky note relative to another node

- Type '"inside group 2"' is not assignable to type '"When clicking ‘Test workflow’" | "inside group 1" | "inside group 1 - 2"'. Did you mean '"inside group 1"'? [2820]
in with-group example

- Remove commands that are not implemented. And simply add them in an issue (list, diff)

- Diff that ignore position, ids, _rl, credentials names, cachedResultName, cachedResultUrl etc.

- Deploy that ignore position (--merge mode) . If only the position changed, we should not deploy anything, that's only a layout change maybe the user changed something manually. Maybe a default value to true

- generate type for 
```
interface VectorStorePineconeNodeParameters {
  /**
   * Type options: {"calloutAction":{"label":"RAG starter template","type":"openSampleWorkflowTemplate","templateId":"rag-starter-template"}}
   */
  readonly ragStarterCallout?: any;
```



## Tests to add:

- Propagate types for if nodes

## Notes for README.md

#### n8n-kit

- Support 623+ nodes

- We have multiple exports
	- "@vahor/n8n-kit" contains chain, workflow and app.
	- "@vahor/n8n-kit/nodes" contains nodes that have been manually implemented, with types.
	- "@vahor/n8n-kit/nodes/generated" contains nodes that have been automatically generated, without output types. A node can be present in both folders.
	- "@vahor/n8n-kit/credentials/generated" contains credentials that have been automatically generated.

- ExpressionBuilder is here to help but we can still use string values directly.


#### n8n-cli
