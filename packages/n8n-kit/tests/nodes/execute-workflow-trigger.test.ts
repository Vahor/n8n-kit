import { describe, expect, expectTypeOf, test } from "bun:test";
import { type } from "arktype";
import { App, Chain, Workflow } from "../../src";
import { ExecuteWorkflowTrigger, NoOp } from "../../src/nodes";

describe("ExecuteWorkflowTrigger", () => {
	test("it works", async () => {
		const app = new App();
		const workflow = new Workflow(app, "test", {
			definition: Chain.start(new NoOp("test")),
			inputSchema: type({
				a: "string",
				b: "1 | 2",
				c: "number",
				d: "unknown",
			}),
			outputSchema: type({
				hello: "'world'",
			}),
		});

		const executeNode = new ExecuteWorkflowTrigger(workflow, "test", {});
		const parameters = await executeNode.getParameters();
		expect(parameters.workflowInputs).toEqual({
			values: [
				{
					name: "a",
					type: "string",
				},
				{
					name: "b",
					type: "number",
				},
				{
					name: "c",
					type: "number",
				},
				{
					name: "d",
					type: "any",
				},
			],
		});
		type Input = typeof executeNode extends ExecuteWorkflowTrigger<any, infer I>
			? I["infer"]
			: never;
		expectTypeOf<Input>().toEqualTypeOf<{
			a: string;
			b: 1 | 2;
			c: number;
			d: unknown;
		}>();
	});
});
