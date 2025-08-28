import path from "node:path";
import { App, Chain, NodejsFunction, type, Workflow } from "@vahor/n8n-kit";
import { Code, Fields } from "@vahor/n8n-kit/nodes";
import { ManualTrigger } from "@vahor/n8n-kit/nodes/generated";

const workflow = new Workflow("my-workflow", {
	name: "Code Bundle Example",
	definition: Chain.start(new ManualTrigger("When clicking ‘Test workflow’"))
		.next(
			new Fields("Set some data", {
				label: "Get data from some API",
				parameters: {
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
					],
				},
			}),
		)
		.next(
			({ $ }) =>
				new Code("Bundle JS", {
					label: "Validate data",
					parameters: {
						language: "javaScript",
						jsCode: NodejsFunction.from({
							projectRoot: path.join(__dirname, "validation-function"),
							input: {
								action: $("json.action"),
								user_id: $("json.user_id"),
							},
						}),
					},
				}),
		),
});

const app = new App();
app.add(workflow);

export { app };
