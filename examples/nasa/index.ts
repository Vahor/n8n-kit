const workflow = new Workflow("My workflow", {
	unlinkedNodes: [
		new StickyNote("Sticky Note", {
			position: [0, 0],
			content:
				"## Setup required\n\nYou need to create a NASA account and create credentials, and create a bin with Postbin and enter the ID - see [the documentation](https://docs.n8n.io/try-it-out/longer-introduction/)",
			height: 120,
			width: 600,
		}),
	],
	definition: new ScheduleTrigger("Schedule Trigger")
		.next(new NoOp("NASA"))
		.next(
			new If("If")
				.true(new NoOp("PostBin(true)"))
				.false(new NoOp("PostBin(false)")),
		),
});

console.log(JSON.stringify(workflow.build(), null, 2));
