import { App, Chain, Credentials, expr, type, Workflow } from "@vahor/n8n-kit";
import {
	HttpRequest,
	If,
	Nasa,
	ScheduleTrigger,
	StickyNote,
	Webhook,
} from "@vahor/n8n-kit/nodes";

const analyticsCredentials = Credentials.byId({
	name: "httpCustomAuth",
	id: "analytics-credentials-id",
});

const workflow = new Workflow("my-workflow", {
	active: true,
	name: "Webhook -> Analytics + OpenAI",
	definition: [
		Chain.start(
			new Webhook("webhook", {
				parameters: {
					httpMethod: "POST",
					path: "path-to-webhook",
				},
				outputSchema: {
					headers: type({
						Authorization: "string",
					}),
				},
			}),
		).multiple([
			new HttpRequest("send-to-analytics", {
				httpCustomAuth: analyticsCredentials,
				parameters: {
					authentication: "genericCredentialType",
					genericAuthType: "httpCustomAuth",
				},
			}),
		]),
	],
});

const app = new App();
app.add(analyticsCredentials);
app.add(workflow);

export { app };
