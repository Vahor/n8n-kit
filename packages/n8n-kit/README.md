# @vahor/n8n-kit

Build n8n workflows using TypeScript code with full type safety and IDE support.

## Installation

```sh
bun install @vahor/n8n-kit
```

## Features

- **400+ Nodes**: Support for all base n8n nodes plus AI nodes
- **Type Safety**: Full TypeScript support with intelligent autocomplete
- **Expression Builder**: Type-safe n8n expressions with IDE support
- **Chain API**: Fluent API for building workflow chains

## Exports

The package provides several export paths for different use cases:

### `@vahor/n8n-kit`
Main export containing core functionality:
- `App` - Application container
- `Chain` - Workflow chain builder
- `Workflow` - Workflow definition
- `Credentials` - Credential management

### `@vahor/n8n-kit/nodes`
Manually implemented nodes with full type definitions:
- `If` - Conditional logic node
- `ScheduleTrigger` - Schedule-based triggers
- `Nasa` - NASA API integration
- And more...

### `@vahor/n8n-kit/nodes/generated`
Auto-generated nodes from n8n-nodes-base (without output types):
- `PostBin` - PostBin integration
- All 400+ n8n base nodes and ai nodes

### `@vahor/n8n-kit/credentials/generated`
Auto-generated credentials from n8n-nodes-base:
- All n8n credential types with proper typing

## Example Init File

Your entrypoint file should export an `app` instance:

```typescript
// src/index.ts
import { App, Workflow, Chain } from "@vahor/n8n-kit";

const workflow = new Workflow("my-workflow", {
  active: true,
  name: "My Workflow",
  definition: [
    Chain.start(
      // ...
    ),
  ],
});

const app = new App();
app.add(workflow);

export { app };
```

## Core Concepts

### App

The `App` class serves as the main container for your n8n workspace:

```typescript
const app = new App();
app.add(workflow1);     // Add workflows
app.add(workflow2);
```

### Workflow

You know what a workflow is, right?

```ts
const workflow = new Workflow("my-workflow", {
	active: true,
	name: "My Workflow",
	description: "This is a description",
	tags: ["tag1", "tag2"],
	settings: {
		executionTimeout: 1200,
	},
	inputSchema: type({
		field: "string",
	}),
	outputSchema: type({
		someField: "string",
		otherField: "number",
	}),
	definition: (workflow) => [
		new StickyNote("note", {
			position: [0, 0],
			content: "Hello World",
			height: 120,
			width: 600,
		}),

		anotherChain,

		chainWithWorkflowParameter(workflow),
	]
});
```

**Parameters:**
- `name` - Name of the workflow
- `active` - Whether the workflow is active or not
- `description` - Description of the workflow. Can be a function that takes the workflow as parameter (required for `Group` nodes)
- `tags` - Tags of the workflow
- `settings` - Settings of the workflow
- `inputSchema` - Input schema of the workflow. Only used for type validation when using `ExecuteWorkflow` and `ExecuteWorkflowTrigger`.
- `outputSchema` - Output schema of the workflow. Only used for type validation when using 
`ExecuteWorkflow` and `ExecuteWorkflowTrigger`.
- `definition` - Definition of the workflow.

For all type parameters, you'll have to use the `type` function from [`arktype`](https://arktype.io/docs/primitives) to define the schema. The `type` method is re-exported in `@vahor/n8n-kit`.

### Credentials

Credentials must be created in n8n first, then referenced by ID:

```typescript
const googleDriveApiCredentials = Credentials.byId({
	name: "googleDriveOAuth2Api", // Credential type (auto-completed - type derives from it)
	id: "abc123",                 // n8n credential ID
});
```

To get the id, go on your n8n instance, click on a credential, and copy the id from the URL.
e.g. `https://n8n.instance.com/home/credentials/yTwI5ccVwfGll1Kf` => `yTwI5ccVwfGll1Kf`

**Note:** As these credentials are not deployed using the CLI, you don't need to add them to the app. 

### Chain

Chains represent connected sequences of nodes:

```typescript
Chain.start(triggerNode)
	.next(processNode)
	.next(({ $ }) => conditionalNode)                   // Access to expression builder
	.multiple([Chain.start(node1).next(node11), node2]) // Multiple branches
	.connect(["node-1", "node-2"], node3)               // Connect to multiple nodes by their ids
```

**Note:** You can't use `next()` after `multiple()`, you'll have to use `connect()` to join the branches in one chain.

### Node

Each node has a label and properties:

```typescript
new NodeType("unique-id", {
	label: "Display Name",           // Optional, defaults to node id
	position: [0, 0],                // Optional, when missing the node is automatically positioned
	parameters: {                    // Node-specific parameters
		// ... type-safe parameters
	},
})
```

## Expression Builder

> ![Warning] This feature is experimental and may change in the future.
> As a lot of n8n nodes are auto-generated they don't have output types.

The ExpressionBuilder provides type-safe n8n expressions with IDE support:

### Basic Usage

```typescript
// In .next() callback, $ gives access to previous node outputs
// json will be the previous node object. You can also acces properties of all past nodes in the chain.
.next(({ $ }) => 
	new SomeNode("id", {
		parameters: {
			value: $("json.propertyName").toExpression(),
		},
	})
)
```

`$` is of type [`$Selector<T>`], you can use it as `$Selector<typeof myChain>`. 

### Property Access

```typescript
$("json.user.name").toExpression()
// Results in: "={{ $json.user.name }}"

$("['Node Name'].nested.property").toExpression()
// Results in: "={{ $('Node Name').nested.property }}"
```

### Method Calls

```typescript
$("json.items")
	.call("length")
	.toExpression()
// Results in: "={{ $json.items.length() }}"

$("json.text")
	.call("toUpperCase")
	.call("split", " ")
	.call("join", "-")
	.toExpression()
// Results in: "={{ $json.text.toUpperCase().split(' ').join('-') }}"
```

### Property Navigation

```typescript
$("json.config")
	.prop("['api.key']")
	.toExpression()
// Results in: "={{ $json.config['api.key'] }}"
```

### `expr` function

When using multiple expressions in one place, calling `toExpression()` can make it hard to read the code.

To avoid this, you can use the `expr` function:

```ts
import { expr } from "@vahor/n8n-kit";

expr`Hello ${$("json.name")}, you have ${$("json.count")} messages.`
// Results in: "=Hello {{ $json.name }}, you have {{ $json.count }} messages."
```

Note: You can still use string values directly instead of using the builder.


## TypeScript Integration

You need to enable `strict` mode in your `tsconfig.json` file
