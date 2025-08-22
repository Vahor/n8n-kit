import { App, Chain, If, type, Webhook, Workflow } from "@vahor/n8n-kit";

const workflow = new Workflow("complex-workflow", {
	active: true,
	name: "Complex Workflow",
	definition: Chain.start(
		new Webhook("webhook", {
			name: "Webhook",
			httpMethod: "POST",
			path: "abc",
			responseMode: "responseNode",
			outputSchema: {
				body: type({
					entity_id: "string",
					execution_type: "'full' | 'partial'",
				}),
			},
		}),
	).next(
		({ $ }) =>
			new If("check-valid-body", {
				combinator: "and",
				conditions: [
					{
						leftValue: $("json.body"),
						operator: {
							type: "string",
							operation: "exists",
						},
					},
					{
						leftValue: $("json.body.execution_type"),
						operator: {
							type: "string",
							operation: "exists",
						},
					},
				],
			}),
	),
});

const app = new App();
app.add(workflow);

export { app };
