import {
	App,
	Chain,
	Credentials,
	JsonExpression,
	type,
	Workflow,
} from "@vahor/n8n-kit";
import { HttpRequest, Webhook } from "@vahor/n8n-kit/nodes";

const analyticsCredentials = Credentials.byId({
	name: "httpCustomAuth",
	id: "hEQRwqdMuqRSHlXX", // your id (credentials -> details -> id)
});

const workflow = new Workflow("my-workflow", {
	active: true,
	name: "Webhook -> Analytics + OpenAI",
	definition: [
		Chain.start(
			new Webhook("webhook", {
				parameters: {
					httpMethod: "GET",
					path: "path-to-webhook",
				},
				outputSchema: {
					query: type({
						prompt: "string",
					}),
					headers: type({
						"cf-connecting-ip": "string",
					}),
				},
			}),
		).multiple(({ $ }) => [
			new HttpRequest("send-to-analytics", {
				httpCustomAuth: analyticsCredentials,
				parameters: {
					method: "POST",
					url: "https://httpbin.org/post",
					authentication: "genericCredentialType",
					genericAuthType: "httpCustomAuth",
					specifyBody: "json",
					sendBody: true,
					jsonBody: JsonExpression.from({
						events: [
							{
								user_id: $("webhook.headers['cf-connecting-ip']"),
								event_type: "workflow_end",
								event_properties: {
									workflow_id: "{{ $workflow.id }}",
								},
							},
						],
					}).toExpression({ indent: 2 }),
				},
			}),
		]),
	],
});

const app = new App();
app.add(analyticsCredentials);
app.add(workflow);

export { app };
