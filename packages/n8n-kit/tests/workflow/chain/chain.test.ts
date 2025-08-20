import { describe, expect, test } from "bun:test";
import { type } from "arktype";
import { Code, If, Workflow } from "../../../src";
import { NoOp } from "../../../src/nodes/no-op";
import { Chain } from "../../../src/workflow/chain/chain";

describe("Chain", () => {
	describe("next", () => {
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

	describe("multiple", () => {
		test("can chain multiple elements", () => {
			const A = new NoOp("a");
			const B = new NoOp("b");
			const C = new Code("c", {
				outputSchema: type({ hello: "1" }),
				jsCode: "return { hello: 1 };",
			});
			const D = new Code("d", {
				outputSchema: type({ hello: "2" }),
				jsCode: "return { hello: 2 };",
			});
			const E = new NoOp("e");

			const chain = Chain.start(A).multiple([B, C, D, E]);
			const workflow = new Workflow("test", {
				definition: chain,
			});

			const result = workflow.build();
			expect(result.nodes.map((n) => n.id)).toEqual(["a", "b", "c", "d", "e"]);
		});
	});
});
