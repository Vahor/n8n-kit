import {
	App,
	Chain,
	Group,
	ManualTrigger,
	NoOp,
	Workflow,
} from "@vahor/n8n-kit";

const workflow = new Workflow("with-groups", {
	name: "Workflow with groups",
	definition: (wf) =>
		Chain.start(new ManualTrigger("When clicking ‘Test workflow’"))
			.multiple([
				new Group(
					wf,
					"group-1",
					{
						content: "Group 1",
						color: "YELLOW",
					},
					Chain.start(new NoOp("inside group 1")).next(
						new NoOp("inside group 1 - 2"),
					),
				),
				new Group(
					wf,
					"group-2",
					{
						content: "Group 2",
						color: "RED",
					},
					Chain.start(new NoOp("inside group 2")),
				),
			])
			.connect(
				["inside group 1 - 2", "inside group 2"],
				new NoOp("after groups"),
			),
});

const app = new App();
app.add(workflow);

export { app };
