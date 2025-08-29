import { App, Chain, Credentials, expr, Workflow } from "@vahor/n8n-kit";
import {
	If,
	Nasa,
	ScheduleTrigger,
	StickyNote,
	Webhook,
} from "@vahor/n8n-kit/nodes";
import { PostBin } from "@vahor/n8n-kit/nodes/generated";

const nasaCredentials = Credentials.byId({
	name: "nasaApi",
	id: "yTwI5ccVwfGll1Kf",
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
					parameters: {
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
					},
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

const app = new App();
app.add(nasaCredentials);
app.add(workflow);

export { app };
