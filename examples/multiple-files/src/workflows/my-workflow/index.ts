import { type App, Workflow } from "@vahor/n8n-kit";
import { HttpRequest, StickyNote } from "@vahor/n8n-kit/nodes";
import { basicAuthCredentials } from "../../credentials/basic-auth";

export function createMyWorkflow(app: App) {
	return new Workflow(app, "my-workflow", {
		active: true,
		name: "Workflow name",
		definition: [
			new StickyNote("note", {
				position: [0, 0],
				parameters: {
					content:
						"## Import Example\n\nThis workflow and its credentials are imported from separate files.",
					height: 120,
					width: 600,
				},
			}),

			new HttpRequest("http-request", {
				httpBasicAuthCredentials: basicAuthCredentials,
				parameters: {
					url: "https://some-api.com/some-endpoint",
					method: "GET",
				},
			}),
		],
	});
}
