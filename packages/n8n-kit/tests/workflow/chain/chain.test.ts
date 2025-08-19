import { describe, expect, test } from "bun:test";
import { If, Workflow } from "../../../src";
import { NoOp } from "../../../src/nodes/no-ops";

describe("Chain", () => {
	test("can chain elements", () => {
		const A = new NoOp("a");
		const B = new NoOp("b");
		const C = new NoOp("c");

		const chain = A.next(B).next(C);

		const workflow = new Workflow("test", {
			definition: chain,
		});

		const result = workflow.build();
		expect(result.nodes.map((n) => n.id)).toEqual(["a", "b", "c"]);
	});

	test("can loop elements", () => {
		const A = new NoOp("a");
		const B = new NoOp("b");
		const C = new If("c");
		const D = new NoOp("d");

		const chain = A.next(B).next(C.true(D));

		const workflow = new Workflow("test", {
			definition: chain,
		});

		const result = workflow.build();
		expect(result.nodes.map((n) => n.id)).toEqual(["a", "b", "c", "d"]);
	});
});
