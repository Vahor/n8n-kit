import path from "node:path";
import {
	App,
	Chain,
	expr,
	NodejsFunction,
	type,
	Workflow,
} from "@vahor/n8n-kit";
import { Code, Fields } from "@vahor/n8n-kit/nodes";
import { ManualTrigger } from "@vahor/n8n-kit/nodes/generated";

const workflow = new Workflow("my-workflow", {
	name: "Code Bundle Example",
	definition: Chain.start(new ManualTrigger("When clicking ‘Test workflow’"))
		.next(
			new Fields("Set some data", {
				label: "Get data from some API",
				parameters: {
					assignments: {
						assignments: [
							{
								name: "action",
								type: type("string"),
								value: "create",
							},
							{
								name: "user_id",
								type: type("string"),
								value: "invalid-user-id",
							},
							{
								name: "some_constant",
								type: type("string"),
								value: "some-constant",
							},
							{
								name: "some_object",
								type: type({
									some_field: type("string"),
									other_field: type("number"),
								}),
								value: {
									some_field: "some-field",
									other_field: 123,
								},
							},
						],
					},
				},
			}),
		)
		.next(
			({ $ }) =>
				new Code("Bundle JS", {
					label: "Validate data",
					parameters: {
						mode: "runOnceForEachItem", // required to access $json
						language: "javaScript",
						jsCode: NodejsFunction.from({
							projectRoot: path.join(__dirname, "validation-function"),
							input: {
								action: $("json.action"),
								user_id: $("json.user_id"),
								some_constant: "some-constant",
								some_object: $("json.some_object"),
								custom_expression: expr`{{ $now }}`, // required to wrap in ={{ }}
								same_without_expr: `={{ $now }}`,
							},
						}),
					},
				}),
		),
});

const app = new App();
app.add(workflow);

export { app };
