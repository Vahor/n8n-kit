import { App, Chain, Placeholder, Workflow } from "@vahor/n8n-kit";
import { If, NoOp, ScheduleTrigger } from "@vahor/n8n-kit/nodes";

const app = new App();

new Workflow(app, "my-workflow", {
	active: true,
	name: "If Tree",
	definition: [
		Chain.start(
			new ScheduleTrigger("schedule-trigger", {
				label: "Schedule",
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
		).next(
			new If("if-root", {
				parameters: {},
			})
				.true(
					Chain.start(new NoOp("true"))
						.next(
							new If("if-true", { parameters: {} })
								.true(new NoOp("if-true-true"))
								.false(new NoOp("if-true-false")),
						)
						.connect(["if-true-true", "if-true-false"], new NoOp("end")),
				)
				.false(
					Chain.start(new NoOp("false")).next(
						new If("if-false", { parameters: {} })
							.true(
								Chain.start(new NoOp("if-false-true")).next(
									new Placeholder("if-true-false"),
								),
							)
							.false(
								Chain.start(new NoOp("if-false-false")).next(
									new Placeholder("true"),
								),
							),
					),
				),
		),
	],
});

export { app };
