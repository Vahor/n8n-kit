import { describe, expect, test } from "bun:test";
import { If, Workflow } from "../../src";
import { NoOp } from "../../src/nodes/no-ops";

describe("Chain", () => {
	test("can chain elements", () => {
		const A = new NoOp("A");
		const B = new NoOp("B");
		const C = new NoOp("C");

		const chain = A.next(B).next(C);

		const workflow = new Workflow("test", {
			definition: chain,
		});

		const result = workflow.build();
		expect(result.nodes.map((n) => n.id)).toEqual(["A", "B", "C"]);
	});

	test("can loop elements", () => {
		const A = new NoOp("A");
		const B = new NoOp("B");
		const C = new If("C");
		const D = new NoOp("D");

		const chain = A.next(B).next(C.when(true, D));

		const workflow = new Workflow("test", {
			definition: chain,
		});

		const result = workflow.build();
		expect(result.nodes.map((n) => n.id)).toEqual(["A", "B", "C", "D"]);
	});
});
