import { describe, expect, test } from "bun:test";
import { If, Workflow } from "../../../src";
import { NoOp } from "../../../src/nodes/no-ops";
import { Chain } from "../../../src/workflow/chain/chain";

describe("Chain", () => {
	test("can chain elements", () => {
		const A = new NoOp("a");
		const B = new NoOp("b");
		const C = new NoOp("c");

		const chain = Chain.start(A).next(B).next(C);
		const workflow = new Workflow("test", {
			definition: chain,
		});

		const result = workflow.build();
		expect(result.nodes.map((n) => n.id)).toEqual(["a", "b", "c"]);
	});

	test("can loop elements", () => {
		const A = new NoOp("a");
		const B = new NoOp("b");
		const C = new If("c", { conditions: [] });
		const D = new NoOp("d");

		const chain = Chain.start(A).next(B).next(C.true(D));

		const workflow = new Workflow("test", {
			definition: chain,
		});

		const result = workflow.build();
		expect(result.nodes.map((n) => n.id)).toEqual(["a", "b", "c", "d"]);
	});
});
