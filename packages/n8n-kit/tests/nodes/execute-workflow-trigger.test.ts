import { describe, expect, expectTypeOf, test } from "bun:test";
import { type } from "arktype";
import { Chain, ExecuteWorkflowTrigger, NoOp, Workflow } from "../../src";

describe("ExecuteWorkflowTrigger", () => {
	test("it works", () => {
		const workflow = new Workflow("test", {
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
		const parameters = executeNode.getParameters();
		expect(parameters.workflowInput).toEqual({
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
