import { describe, expect, expectTypeOf, test } from "bun:test";
import { type } from "arktype";
import { Code, Group, If, Merge, Workflow } from "../../../src";
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

		test("can chain with ifs", () => {
			const A = new NoOp("a");
			const B = new If("b", { conditions: [] });
			const C = new Code("c", {
				outputSchema: type({ hello: "'c'" }),
			});
			const D = new Code("d", {
				outputSchema: type({ hello: "'d'" }),
			});

			const chain = Chain.start(A).next(B.true(C).false(D));
			const workflow = new Workflow("test", {
				definition: chain,
			});

			const result = workflow.build();
			expect(result.nodes.map((n) => n.id)).toEqual(["a", "b", "c", "d"]);
		});

		test("works with groups", () => {
			const A = new Code("a", {
				outputSchema: type({ hello: "'a'" }),
				jsCode: "return { hello: 'a' };",
			});
			const B = new Code("b", {
				outputSchema: type({ hello: "'b'" }),
				jsCode: "return { hello: 'b' };",
			});
			const C = new Code("c", {
				outputSchema: type({ hello: "'c'" }),
				jsCode: "return { hello: 'c' };",
			});
			const AA = new Group(
				null,
				"aa",
				{
					content: "Group A",
				},
				Chain.start(A),
			);
			const BB = new Group(
				null,
				"bb",
				{
					content: "Group B",
				},
				Chain.start(B).next(C),
			);

			const chain = Chain.start(AA).next(BB);
			type Context = (typeof chain)["~context"];
			expectTypeOf<Context["a"]>().toEqualTypeOf<{ hello: "a" }>();
			expectTypeOf<Context["b"]>().toEqualTypeOf<{ hello: "b" }>();
			expectTypeOf<Context["c"]>().toEqualTypeOf<{ hello: "c" }>();
			expectTypeOf<Context["json"]>().toEqualTypeOf<{ hello: "c" }>();
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

		test("can connect to merge", () => {
			const Start = new NoOp("start");
			const A = new NoOp("a");
			const B = new NoOp("b");
			const C = new Merge("c", {
				mode: "combine",
			});
			const D = new NoOp("d");

			const chain = Chain.start(Start)
				.multiple([A, B])
				.connect(["a", "b"], C, { b: { to: 1 } })
				.next(D);

			const workflow = new Workflow("test", {
				definition: chain,
			});

			const result = workflow.build();
			expect(result.nodes.map((n) => n.id).toSorted()).toEqual([
				"a",
				"b",
				"c",
				"d",
				"start",
			]);
			const connections = result.connections;
			expect(connections.start!.main[0]!.map((c) => c.node)).toEqual([
				"a",
				"b",
			]);
			expect(connections.a!.main[0]!.map((c) => c.node)).toEqual(["c"]);
			expect(connections.b!.main[0]!.map((c) => [c.node, c.index])).toEqual([
				["c", 1],
			]);
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

		test("works with groups", () => {
			const Start = new NoOp("start");
			const A = new Code("a", {
				outputSchema: type({ hello: "'a'" }),
				jsCode: "return { hello: 'a' };",
			});
			const B = new Code("b", {
				outputSchema: type({ hello: "'b'" }),
				jsCode: "return { hello: 'b' };",
			});
			const C = new Code("c", {
				outputSchema: type({ hello: "'c'" }),
				jsCode: "return { hello: 'c' };",
			});
			const D = new NoOp("d");

			const AA = (wf: Workflow) =>
				new Group(wf, "aa", { content: "Group A" }, Chain.start(A));
			const BB = (wf: Workflow) =>
				new Group(wf, "bb", { content: "Group B" }, Chain.start(B).next(C));

			const workflow = new Workflow("test", {
				definition: (wf) =>
					Chain.start(Start)
						.multiple([AA(wf), BB(wf)])
						.connect(["a", "c"], D),
			});
			const result = workflow.build();
			expect(result.nodes.map((n) => n.id).toSorted()).toEqual([
				"a",
				"aa",
				"b",
				"bb",
				"c",
				"d",
				"start",
			]);
			const connections = result.connections;
			expect(connections.start!.main[0]!.map((c) => c.node)).toEqual([
				"a",
				"b",
			]);
			expect(connections.a!.main[0]!.map((c) => c.node)).toEqual(["d"]);
			expect(connections.b!.main[0]!.map((c) => [c.node, c.index])).toEqual([
				["c", 0],
			]);
			expect(connections.c!.main[0]!.map((c) => [c.node, c.index])).toEqual([
				["d", 0],
			]);

			// TODO: add type tests
		});
	});
});
