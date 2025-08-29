import path from "node:path";
import {
	App,
	Chain,
	Credentials,
	JsonExpression,
	PythonFunction,
	type,
	Workflow,
} from "@vahor/n8n-kit";
import {
	Code,
	HttpRequest,
	Webhook,
	WebhookResponse,
} from "@vahor/n8n-kit/nodes";

const analyticsCredentials = Credentials.byId({
	name: "httpCustomAuth",
	id: "hEQRwqdMuqRSHlXX", // your id (credentials -> details -> id)
});

const anthropicCredentials = Credentials.byId({
	name: "anthropicApi",
	id: "qtQFvIABHtrMfErE",
});

// Call with https://n8n.instance.fr/webhook-test/path-to-webhook?type=type1&prompt=Hello%20World

const workflow = new Workflow("my-workflow", {
	active: true,
	name: "Webhook -> Analytics + OpenAI",
	definition: [
		Chain.start(
			new Webhook("webhook", {
				parameters: {
					responseMode: "responseNode",
					httpMethod: "GET",
					path: "path-to-webhook",
				},
				outputSchema: {
					query: type({
						prompt: "string",
						type: "'type1' | 'type2'",
					}),
					headers: type({
						"cf-connecting-ip": "string",
					}),
				},
			}),
		).multiple(({ $ }) => [
			new HttpRequest("send-to-analytics", {
				disabled: process.env.NODE_ENV !== "production",
				httpCustomAuthCredentials: analyticsCredentials,
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

			Chain.start(
				new Code("generate-prompt", {
					outputSchema: type({
						prompt: "string",
					}),
					parameters: {
						mode: "runOnceForEachItem",
						language: "python",
						pythonCode: PythonFunction.from({
							projectRoot: path.join(__dirname, "python-function"),
							entrypoint: "generate-prompt.py",
							input: {
								type: $("webhook.query.type"),
							},
						}),
					},
				}),
			)
				.next(
					({ $: $2 }) =>
						new HttpRequest("send-to-anthropic", {
							anthropicApiCredentials: anthropicCredentials,
							outputSchema: type({
								content: type({
									text: "string",
									type: "string",
								}).array(),
							}),
							parameters: {
								method: "POST",
								url: "https://api.anthropic.com/v1/messages",
								authentication: "predefinedCredentialType",
								nodeCredentialType: "anthropicApi",
								specifyBody: "json",
								sendBody: true,
								sendHeaders: true,
								headerParameters: {
									parameters: [
										{
											name: "anthropic-version",
											value: "2023-06-01",
										},
									],
								},
								jsonBody: JsonExpression.from({
									model: "claude-3-haiku-20240307",
									temperature: 1,
									max_tokens: 200,
									system: [
										{
											text: $2("['generate-prompt'].prompt"),
											type: "text",
										},
									],
									messages: [
										{
											role: "user",
											content: $("webhook.query.prompt"),
										},
									],
								}).toExpression({ indent: 2 }),
							},
						}),
				)
				.next(
					({ $: $2 }) =>
						new WebhookResponse("format-output", {
							parameters: {
								respondWith: "json",
								responseBody: JsonExpression.from({
									message: $2("['send-to-anthropic'].content")
										.find((item) => item.type === "text")
										.prop(".text")
										.toJsonString(),
								}).toExpression(),
							},
						}),
				),
		]),
	],
});

const app = new App();
app.add(analyticsCredentials);
app.add(workflow);

export { app };
