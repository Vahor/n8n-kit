import {
	App,
	Chain,
	Credentials,
	expr,
	If,
	Nasa,
	PostBin,
	ScheduleTrigger,
	StickyNote,
	Workflow,
} from "@vahor/n8n-kit";

const nasaCredentials = Credentials.byId("nasa-credentials", {
	name: "nasaApi",
	id: "yTwI5ccVwfGll1Kf",
});

const workflow = new Workflow("my-workflow", {
	active: true,
	name: "NASA Example",
	definition: [
		new StickyNote("note", {
			position: [0, 0],
			content:
				"## Setup required\n\nYou need to create a NASA account and create credentials, and create a bin with Postbin and enter the ID - see [the documentation](https://docs.n8n.io/try-it-out/longer-introduction/)",
			height: 120,
			width: 600,
		}),

		Chain.start(
			new ScheduleTrigger("schedule-trigger", {
				name: "Schedule trigger",
				interval: [
					{
						field: "weeks",
						triggerAtDay: [1],
						triggerAtHour: 9,
						weeksInterval: 1,
					},
				],
			}),
		)
			.next(
				new Nasa("nasa", {
					credentials: nasaCredentials,
					resource: "donkiSolarFlare",
					additionalFields: {
						startDate: expr`{{ $today.minus(1, 'day') }}`,
					},
				}),
			)
			.next(({ $ }) =>
				new If("if", {
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
				})
					.true(
						new PostBin("PostBin(true)", {
							resource: "request",
							binId: "1741914338605-0907339996192",
							binContent: expr`There was a solar flare of class ${$("json.classType")}`,
							operation: "send",
						}),
					)
					.false(
						new PostBin("PostBin(false)", {
							resource: "request",
							binId: "1741914338605-0907339996192",
							binContent: expr`There was a solar flare of class ${$("json.classType")}`,
							operation: "send",
						}),
					),
			),
	],
});

const app = new App();
app.add(nasaCredentials);
app.add(workflow);

export { app };
