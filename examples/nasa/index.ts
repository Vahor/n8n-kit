import { App, Chain, Credentials, expr, Workflow } from "@vahor/n8n-kit";
import { If, Nasa, ScheduleTrigger, StickyNote } from "@vahor/n8n-kit/nodes";
import { PostBin } from "@vahor/n8n-kit/nodes/generated";

const nasaCredentials = Credentials.byId({
	name: "nasaApi",
	id: "yTwI5ccVwfGll1Kf",
});

const workflow = new Workflow("my-workflow", {
	active: true,
	name: "NASA Example",
	definition: [
		new StickyNote("note", {
			position: [0, 0],
			parameters: {
				content:
					"## Setup required\n\nYou need to create a NASA account and create credentials, and create a bin with Postbin and enter the ID - see [the documentation](https://docs.n8n.io/try-it-out/longer-introduction/)",
				height: 120,
				width: 600,
			},
		}),

		Chain.start(
			new ScheduleTrigger("schedule-trigger", {
				label: "Schedule trigger",
				parameters: {
					rule: {
						interval: [
							{
								field: "weeks",
								triggerAtDay: [1],
								triggerAtHour: 9,
								weeksInterval: 1,
							},
						],
					},
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
						conditions: {
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
