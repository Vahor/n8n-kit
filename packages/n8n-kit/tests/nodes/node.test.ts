import { describe, expect, test } from "bun:test";
import { Chain } from "../../src";
import { Code } from "../../src/nodes";
import { NoOp } from "../../src/nodes/generated";

describe("clone", () => {
	test("all properties are cloned", () => {
		const node = new Code("id", {
			label: "Label",
			position: [0, 0],
			parameters: {
				language: "javaScript",
				jsCode: "console.log('hello')",
			},
		});
		const cloned = node.clone("id2");
		expect(cloned.id).toEqual("id2");
		expect(cloned.label).toEqual("Label");
		expect(cloned.position).toEqual([0, 0]);
		expect(cloned.getParameters()).toEqual({
			language: "javaScript",
			jsCode: "console.log('hello')",
		});
	});

	describe("chain connections", () => {
		test("when in chain, only the connections up to the clone are preserved - clone after (preserveChainConnections = true)", () => {
			const node = new NoOp("id");
			const chain1 = Chain.start(node).next(new NoOp("id2"));
			const chain2 = Chain.start(
				node.clone("clone", undefined, { preserveChainConnections: true }),
			).next(new NoOp("id3"));

			const chain1List = chain1.toList();
			expect(chain1List.length).toEqual(2);
			expect(chain1List.map((n) => n.id)).toEqual(["id", "id2"]);

			const chain2List = chain2.toList();
			expect(chain2List.length).toEqual(3);
			expect(chain2List.map((n) => n.id)).toEqual(["clone", "id2", "id3"]);
		});

		test("when in chain, only the connections up to the clone are preserved - clone after", () => {
			const node = new NoOp("id");
			const chain1 = Chain.start(node).next(new NoOp("id2"));
			const chain2 = Chain.start(node.clone("clone")).next(new NoOp("id3"));

			const chain1List = chain1.toList();
			expect(chain1List.length).toEqual(2);
			expect(chain1List.map((n) => n.id)).toEqual(["id", "id2"]);

			const chain2List = chain2.toList();
			expect(chain2List.length).toEqual(2);
			expect(chain2List.map((n) => n.id)).toEqual(["clone", "id3"]);
		});

		test("when in chain, only the connections up to the clone are preserved - clone before", () => {
			const node = new NoOp("id");
			const chain1 = Chain.start(node.clone("clone")).next(new NoOp("id2"));
			const chain2 = Chain.start(node).next(new NoOp("id3"));

			const chain1List = chain1.toList();
			expect(chain1List.length).toEqual(2);
			expect(chain1List.map((n) => n.id)).toEqual(["clone", "id2"]);

			const chain2List = chain2.toList();
			expect(chain2List.length).toEqual(2);
			expect(chain2List.map((n) => n.id)).toEqual(["id", "id3"]);
		});
	});
});
