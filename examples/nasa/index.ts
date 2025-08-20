import {
	App,
	Chain,
	If,
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
	definition: Chain.start(new ScheduleTrigger("schedule-trigger"))
		.next(new NoOp("nasa"))
		.next(
			new If("if")
				.true(new NoOp("PostBin(true)"))
				.false(new NoOp("PostBin(false)")),
		),
});

const app = new App();
app.add(workflow);

export { app };
