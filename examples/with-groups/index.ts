import { App, Chain, Group, Workflow } from "@vahor/n8n-kit";
import { NoOp } from "@vahor/n8n-kit/nodes";
import { ManualTrigger } from "@vahor/n8n-kit/nodes/generated";

const app = new App();

new Workflow(app, "my-workflow", {
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

export { app };
