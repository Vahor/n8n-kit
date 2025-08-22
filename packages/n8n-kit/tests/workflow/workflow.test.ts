import { describe, expect, test } from "bun:test";
import { Chain, NoOp, Workflow } from "../../src";

describe("Workflow", () => {
	describe("can build", () => {
		describe("with a single chain", () => {
			test("can build a workflow", () => {
				const A = new NoOp("a");
				const B = new NoOp("b");

				const workflow = new Workflow("test", {
					definition: Chain.start(A).next(B),
				});
				const result = workflow.build();
				expect(result.nodes.map((n) => n.id)).toEqual(["a", "b"]);
				expect(result.connections.a!.main[0]!.map((c) => c.node)).toEqual([
					"b",
				]);
				expect(result.connections).not.toHaveProperty("b");
			});
		});

		test("can build a workflow with multiple that inter-connect", () => {
			const A = new NoOp("a");
			const B = new NoOp("b");
			const C = new NoOp("c");
			const D = new NoOp("d");

			const workflow = new Workflow("test", {
				definition: [Chain.start(A).next(B), Chain.start(C).multiple([A, D])],
			});
			const result = workflow.build();
			expect(result.nodes.map((n) => n.id).toSorted()).toEqual([
				"a",
				"b",
				"c",
				"d",
			]);
			expect(result.connections.a!.main[0]!.map((c) => c.node)).toEqual(["b"]);
			expect(result.connections).not.toHaveProperty("b");
			expect(result.connections.c!.main[0]!.map((c) => c.node)).toEqual([
				"a",
				"d",
			]);
			expect(result.connections).not.toHaveProperty("d");
		});

		test("can build a workflow with multiple chains", () => {
			const A = new NoOp("a");
			const B = new NoOp("b");
			const C = new NoOp("c");
			const D = new NoOp("d");

			const workflow = new Workflow("test", {
				definition: [Chain.start(A).next(B), Chain.start(C).next(D).next(B)],
			});
			const result = workflow.build();
			expect(result.nodes.map((n) => n.id).toSorted()).toEqual([
				"a",
				"b",
				"c",
				"d",
			]);
			expect(result.connections.a!.main[0]!.map((c) => c.node)).toEqual(["b"]);
			expect(result.connections).not.toHaveProperty("b");
			expect(result.connections.c!.main[0]!.map((c) => c.node)).toEqual(["d"]);
			expect(result.connections.d!.main[0]!.map((c) => c.node)).toEqual(["b"]);
		});
	});
});
