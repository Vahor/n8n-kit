import {
	App,
	Chain,
	expr,
	JsonExpression,
	type,
	Workflow,
} from "@vahor/n8n-kit";
import {
	Code,
	ExecuteWorkflow,
	ExecuteWorkflowTrigger,
} from "@vahor/n8n-kit/nodes";
import { ManualTrigger } from "@vahor/n8n-kit/nodes/generated";

const app = new App();

const reusableWorkflow = new Workflow(app, "my-workflow", {
	name: "Reusable workflow",
	tags: ["reusable"],
	inputSchema: type({
		a: "string",
		b: "1 | 2",
		c: "number",
		d: "unknown",
	}),
	outputSchema: type({
		hello: "'world'",
	}),
	definition: (wf) =>
		Chain.start(new ExecuteWorkflowTrigger(wf, "workflow-trigger", {})),
});

new Workflow(app, "workflow-trigger", {
	name: "Workflow with trigger",
	tags: ["client-id"],
	definition: Chain.start(new ManualTrigger("When clicking ‘Test workflow’"))
		.next(
			new ExecuteWorkflow("call-reusable-workflow", {
				parameters: {
					workflow: reusableWorkflow,
					workflowInputs: {
						a: "hello",
						b: 1,
						c: 2,
						d: "world",
					},
				},
			}),
		)
		.next(
			({ $ }) =>
				new ExecuteWorkflow("import-by-id", {
					parameters: {
						workflow: Workflow.import(app, {
							hashId: reusableWorkflow.getHashId(), // Usually this would come from an environment variable
							inputSchema: type({
								// Suppose it's a different workflow with a different input schema
								a: "string",
							}),
							outputSchema: type({
								something: "string",
							}),
						}),
						workflowInputs: {
							a: $("json.hello").toExpression(),
						},
					},
				}),
		)

		.next(
			({ $ }) =>
				new Code("log-result", {
					parameters: {
						jsCode: expr`console.log(${$("['call-reusable-workflow'].hello")}, ${$("['import-by-id'].something")})`,
					},
				}),
		),
});

export { app };
