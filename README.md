# n8n-kit

[![Code quality](https://github.com/vahor/typed-es/actions/workflows/quality.yml/badge.svg)](https://github.com/vahor/n8n-kit/actions/workflows/quality.yml)
[![npm downloads](https://img.shields.io/npm/dm/%40vahor%2Fn8n-kit)](https://www.npmjs.com/package/@vahor/n8n-kit)

> [!WARNING]  
> This project is currently in alpha stage. APIs may change and some features are still under development.\
> If you use this package, pin the version to a specific version in your `package.json` file.

Build n8n workflows using TypeScript code and deploy them using the CLI.

**This is not an official n8n package.**

**Packages**:
- [**n8n-kit**](./packages/n8n-kit/README.md) - Core library for building workflows
- [**n8n-kit-cli**](./packages/n8n-cli/README.md) - Command-line interface

```sh
npm install @vahor/n8n-kit @vahor/n8n-kit-cli
```

### Example

Find more examples in the [examples folder](https://github.com/Vahor/n8n-kit/tree/main/examples)

![Example workflow](https://github.com/Vahor/n8n-kit/blob/main/examples/nasa/output.png?raw=true)

```ts
const app = new App();

const nasaCredentials = Credentials.byId({
	name: "nasaApi",
	id: "credential-id",
});

const workflow = new Workflow(app, "my-workflow", {
	active: true,
	name: "NASA Example",
	definition: [
		new StickyNote("note", {
			position: [0, 0],
			parameters: {
				content:
					"## Setup required\n\nYou need to create a NASA account and create credentials, and create a bin with Postbin and enter the ID - see [the documentation](https://docs.n8n.io/try-it-out/longer-introduction/)",
				height: 120,
				width: 600,
			},
		}),

		Chain.start(
			new ScheduleTrigger("schedule-trigger", {
				label: "Schedule trigger",
				parameters: {
					rule: {
						interval: [
							{
								field: "weeks",
								triggerAtDay: [1],
								triggerAtHour: 9,
								weeksInterval: 1,
							},
						],
					},
				},
			}),
		)
			.next(
				new Nasa("nasa", {
					nasaApiCredentials: nasaCredentials,
					parameters: {
						resource: "donkiSolarFlare",
						additionalFields: {
							startDate: expr`{{ $today.minus(1, 'day') }}`,
						},
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
							parameters: {
								resource: "request",
								binId: "1741914338605-0907339996192",
								binContent: expr`There was a solar flare of class ${$("json.classType")}`,
								operation: "send",
							},
						}),
					)
					.false(
						new PostBin("PostBin(false)", {
							parameters: {
								resource: "request",
								binId: "1741914338605-0907339996192",
								binContent: expr`There was a solar flare of class ${$("json.classType")}`,
								operation: "send",
							},
						}),
					),
			),
	],
});

export { app };
```

## Limitations

- **Generated Graph Layout**: 
	- No mid-graph direction changes.
  - No way to set node execution priority (n8n runs nodes top-to-bottom)
  - **Workaround**: Deploy the workflow once, then edit the workflow in n8n. With the `--merge` option, node positions won't be overwritten.
- **Credentials**: Must be defined in n8n first, then referenced via `Credentials.byId()` (no API endpoint available)
- **Folders**: The cli will deploy workflow to the root folder. You can still organize them manually once deployed. (no API endpoint available)

Have ideas for improvements? [Open an issue](https://github.com/Vahor/n8n-kit/issues) or [Suggest a Pull Request](https://github.com/Vahor/n8n-kit/blob/main/CONTRIBUTING.md)

## License

MIT

## Credits

n8n nodes are automatically generated based on the code of the official [n8n node repository](https://github.com/n8n-io/n8n).\
Workflows chaining is inspired by [aws-cdk-lib](https://github.com/aws/aws-cdk/tree/main/packages/aws-cdk-lib/aws-stepfunctions) stepfunctions.
