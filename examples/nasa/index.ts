import {
	App,
	Chain,
	If,
	Nasa,
	NoOp,
	ScheduleTrigger,
	StickyNote,
	Workflow,
} from "@vahor/n8n-kit";

const workflow = new Workflow("my-workflow", {
	name: "NASA Example",
	unlinkedNodes: [
		new StickyNote("note", {
			position: [0, 0],
			content:
				"## Setup required\n\nYou need to create a NASA account and create credentials, and create a bin with Postbin and enter the ID - see [the documentation](https://docs.n8n.io/try-it-out/longer-introduction/)",
			height: 120,
			width: 600,
		}),
	],
	definition: Chain.start(
		new ScheduleTrigger("schedule-trigger", {
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
		.next(new Nasa("nasa", {}))
		.next(() =>
			new If("if", {
				combinator: "and",
				conditions: [
					{
						operator: {
							type: "string",
							operation: "contains",
						},
						leftValue: "TODO use $",
						rightValue: "C",
					},
				],
			})
				.true(new NoOp("PostBin(true)"))
				.false(new NoOp("PostBin(false)")),
		),
});

const app = new App();
app.add(workflow);

export { app };
