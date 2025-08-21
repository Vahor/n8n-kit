import {
	App,
	Chain,
	Code,
	ExecuteWorkflow,
	ExecuteWorkflowTrigger,
	expr,
	ManualTrigger,
	type,
	Workflow,
} from "@vahor/n8n-kit";

const reusableWorkflow = new Workflow("reusable-workflow", {
	name: "Reusable workflow",
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

const workflow = new Workflow("workflow-trigger", {
	name: "Workflow with trigger",
	definition: Chain.start(new ManualTrigger("When clicking ‘Test workflow’"))
		.next(
			new ExecuteWorkflow("call-reusable-workflow", {
				workflow: reusableWorkflow,
				workflowInputs: {
					a: "hello",
					b: 1,
					c: 2,
					d: "world",
				},
			}),
		)
		.next(
			({ $ }) =>
				new Code("log-result", {
					jsCode: expr`console.log(${$("call-reusable-workflow.hello")});`,
				}),
		),
});

const app = new App();
app.add(workflow).add(reusableWorkflow);

export { app };
