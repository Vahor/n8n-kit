# n8n-kit

[![Code quality](https://github.com/vahor/typed-es/actions/workflows/quality.yml/badge.svg)](https://github.com/vahor/n8n-kit/actions/workflows/quality.yml)
[![npm downloads](https://img.shields.io/npm/dm/%40vahor%2Fn8n-kit)](https://www.npmjs.com/package/@vahor/n8n-kit)


# n8n-kit

Build n8n workflows using code.
And deploy them using the CLI.

This is not an official n8n package.

```sh
bun install @vahor/n8n-kit @vahor/n8n-kit-cli
```

## Features

- Define workflows using typescript. Each node and expressions is typed as possible.
- Once a workflow is defined, it can be deployed to n8n using the CLI.
- The CLI has multiple commands: `deploy`, `list`, `diff`...

### Example

Find more examples in the [examples folder](https://github.com/Vahor/n8n-kit/tree/main/examples)

![Example workflow](https://github.com/Vahor/n8n-kit/blob/main/examples/nasa/output.png?raw=true)

```ts
import {
	App,
	Chain,
	Credentials,
	expr,
	If,
	Nasa,
	PostBin,
	ScheduleTrigger,
	StickyNote,
	Workflow,
} from "@vahor/n8n-kit";

const nasaCredentials = Credentials.byId("nasa-credentials", {
	name: "nasaApi",
	id: "yTwI5ccVwfGll1Kf",
});

const workflow = new Workflow("my-workflow", {
	active: true,
	name: "NASA Example",
	unlinkedNodes: [
		new StickyNote("note", {
			position: [0, 0],
			content:
				"## Setup required\n\nYou need to create a NASA account and create credentials, and create a bin with Postbin and enter the ID - see [the documentation](https://docs.n8n.io/try-it-out/longer-introduction/)",
			height: 120,
			width: 600,
		}),
	],
	definition: Chain.start(
		new ScheduleTrigger("schedule-trigger", {
			name: "Schedule trigger",
			interval: [
				{
					field: "weeks",
					triggerAtDay: [1],
					triggerAtHour: 9,
					weeksInterval: 1,
				},
			],
		}),
	)
		.next(
			new Nasa("nasa", {
				credentials: nasaCredentials,
				resource: "donkiSolarFlare",
				additionalFields: {
					startDate: expr`{{ $today.minus(1, 'day') }}`, // In the future there will be a better way to write functions calls
				},
			}),
		)
		.next(({ $ }) =>
			new If("if", {
				combinator: "and",
				conditions: [
					{
						operator: {
							type: "string",
							operation: "contains",
						},
						leftValue: $("json.classType").toExpression(),
						rightValue: "C",
					},
				],
			})
				.true(
					new PostBin("PostBin(true)", {
						resource: "request",
						binId: "1741914338605-0907339996192",
						binContent: expr`There was a solar flare of class ${$("json.classType")}`,
						operation: "send",
					}),
				)
				.false(
					new PostBin("PostBin(false)", {
						resource: "request",
						binId: "1741914338605-0907339996192",
						binContent: expr`There was a solar flare of class ${$("json.classType")}`,
						operation: "send",
					}),
				),
		),
});

const app = new App();
app.add(nasaCredentials);
app.add(workflow);

export { app };
```

### Nodes / Workflows

Currently only a few nodes are implemented.

Each workflow has a `definition` property, which is a chain of nodes.
A `unlinkedNodes` property can be used to add nodes that are not part of the chain (e.g. a sticky note).

A chain is a list of nodes, with a starting node chained by `next` calls.

### ExpressionBuilder

The `next` method can be a function with a `$` context parameter. This `$` function can be used to access properties of the current workflow (see n8n expressions) 

This function takes a string as parameter, your ide will suggest the available properties based on the previous nodes. (`json` will always correspond to the previous node)
So when typing `$("jso` your ide will suggest `json.classType` if the previous node outputs a json object with a `classType` property.

Example:

```ts
$("json.classType").toExpression() //  result in "={{ $json.classType }}"
$("Node Name.nested.property").toExpression() // result in "={{ $('Node Name').item.json.nested.property }}"
```

### Functions

n8n also support JavaScript functions inside expressions. Currently we don't have a type safe way to define them. But you can use the `expr` function to call them.

Example:

```ts
expr`{{ $today.minus(1, 'day') }}` // result in "={{ $today.minus(1, 'day') }}"
expr`{{ $today.minus(1, 'day') }}` // result in "={{ $today.minus(1, 'day') }}"
```


### CLI

```sh
bunx n8n-kit --help
```

- `init`: Initialize a new project (create a `n8n-kit.config.json` file)
- `deploy`: Deploy an app to n8n
- `build`: Build the app
- `workflow`: Manage workflows
	- `list`: List existing workflows
	- `get`: Get a workflow
	- `diff`: Diff a workflow with the one on n8n

## Limitations

- The type system can't be perfect, there are thousands of n8n nodes, there's no official type definition for them so we have to generate them.
    - The limitation is mostly on required/optional parameters, and the relationship between input type and output type. (e.g. when setting an input parameter the output can be of a different type)
- As the graph is built dynamically you'll lose style.
   - e.g. if you want to change direction in the middle of a graph, that's not possible. It's Left-to-Right.
- Currently there's no way to add priority to a node. n8n runs nodes top-to-bottom, currently the order is not guaranteed.
- Credentials has to be defined on n8n and referenced in the code using teh `Credentials.byId` method. (reason: no api endpoint)
- Folders are not managed, you can still deploy workflows using the CLI and move them to a folder manually. (reason: no api endpoint)

If you have an idea for a feature or possible fix to one of the limitations, please open an issue.

## License

MIT

## Credits

n8n types are automatically generated based on the code of the official [n8n node repository](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/).
Workflows chaining is inspired from [aws-cdk-lib](https://github.com/aws/aws-cdk/tree/main/packages/aws-cdk-lib/aws-stepfunctions) stepfunctions.
