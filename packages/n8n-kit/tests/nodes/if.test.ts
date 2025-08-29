import { describe, expectTypeOf, test } from "bun:test";
import { Chain, type } from "../../src";
import { Code, If } from "../../src/nodes";
import { NoOp } from "../../src/nodes/generated";
import type { Prettify } from "../../src/utils/types";

describe("If", () => {
	test.failing("fails if there are more than two inputs", () => {
		new If("if", {
			parameters: { conditions: [] },
		})
			.true(new NoOp("true"))
			// @ts-expect-error: this should fail
			.true(new NoOp("false"))
			.false(new NoOp("false"));
	});
	describe("type test, cannot chain two true/false", () => {
		test("true().true()", () => {
			new If("if", {
				parameters: { conditions: [] },
			})
				.true(new NoOp("true"))
				// @ts-expect-error: this should fail
				.true(new NoOp("false"));
		});
		test("false().false()", () => {
			new If("if", {
				parameters: { conditions: [] },
			})
				.false(new NoOp("false"))
				// @ts-expect-error: this should fail
				.false(new NoOp("true"));
		});
		test("true().false()", () => {
			new If("if", {
				parameters: { conditions: [] },
			})
				.true(new NoOp("true"))
				// this works
				.false(new NoOp("true"));
		});
		test("false().true()", () => {
			new If("if", {
				parameters: {
					conditions: [],
				},
			})
				.false(new NoOp("false"))
				// this works
				.true(new NoOp("false"));
		});
	});

	describe("type test, chaining if -> true/false -> connect, we have access to the context of the if", () => {
		const baseifNode = () =>
			new If("if", {
				parameters: { conditions: [] },
			});
		const trueNode = new Code("true", {
			outputSchema: type({ hello: "'true'" }),
			parameters: {
				jsCode: "",
			},
		});
		type trueNodeInContext = { true: { hello: "true" } };
		const falseNode = new Code("false", {
			outputSchema: type({ something: "1" }),
			parameters: {
				jsCode: "",
			},
		});
		type falseNodeInContext = { false: { something: 1 } };
		const trueNodeChain = Chain.start(
			trueNode.clone("true2", { label: "True 2" }),
		)
			.next(new NoOp("something"))
			.next(new NoOp("end"));
		type true2NodeInContext = { true2: trueNodeInContext["true"] };

		describe("node ids are correctly inferred", () => {
			test("true().false()", () => {
				const ifNode = baseifNode().true(trueNode).false(falseNode);
				type IdsInIf = typeof ifNode extends If<any, any, any, any, infer Ids>
					? Ids
					: never;
				expectTypeOf<IdsInIf>().toEqualTypeOf<["true", "false"]>();
			});

			test("true()", () => {
				const ifNode = baseifNode().true(trueNode);
				type IdsInIf = typeof ifNode extends If<any, any, any, any, infer Ids>
					? Ids
					: never;
				expectTypeOf<IdsInIf>().toEqualTypeOf<["true"]>();
			});
			test("false()", () => {
				const ifNode = baseifNode().false(falseNode);
				type IdsInIf = typeof ifNode extends If<any, any, any, any, infer Ids>
					? Ids
					: never;
				expectTypeOf<IdsInIf>().toEqualTypeOf<["false"]>();
			});
			test("false().true()", () => {
				const ifNode = baseifNode().false(falseNode).true(trueNode);
				type IdsInIf = typeof ifNode extends If<any, any, any, any, infer Ids>
					? Ids
					: never;
				expectTypeOf<IdsInIf>().toEqualTypeOf<["false", "true"]>();
			});
		});

		describe("node outputs are correctly inferred", () => {
			test("true().false()", () => {
				const chain = Chain.start(new NoOp("start")).next(
					baseifNode().true(trueNode).false(falseNode),
				);
				type ChainContext = typeof chain extends Chain<infer _> ? _ : never;
				type ExpectedContext = Prettify<trueNodeInContext & falseNodeInContext>;
				expectTypeOf<ChainContext>().toEqualTypeOf<ExpectedContext>();
			});

			test("true()", () => {
				const chain = Chain.start(new NoOp("start")).next(
					baseifNode().true(trueNode),
				);
				type ChainContext = typeof chain extends Chain<infer _> ? _ : never;
				type ExpectedContext = trueNodeInContext;
				expectTypeOf<ChainContext>().toEqualTypeOf<ExpectedContext>();
			});

			test("false()", () => {
				const chain = Chain.start(new NoOp("start")).next(
					baseifNode().false(falseNode),
				);
				type ChainContext = typeof chain extends Chain<infer _> ? _ : never;
				type ExpectedContext = falseNodeInContext;
				expectTypeOf<ChainContext>().toEqualTypeOf<ExpectedContext>();
			});

			test("false().true()", () => {
				const chain = Chain.start(new NoOp("start")).next(
					baseifNode().false(falseNode).true(trueNode),
				);
				type ChainContext = typeof chain extends Chain<infer _> ? _ : never;
				type ExpectedContext = Prettify<falseNodeInContext & trueNodeInContext>;
				expectTypeOf<ChainContext>().toEqualTypeOf<ExpectedContext>();
			});
		});

		test("preserve id and context even when connecting to another chain", () => {
			const chain = Chain.start(new NoOp("start")).next(
				// Only checking true as we've seen that other cases
				// correctly infer the ids and context
				baseifNode().true(trueNodeChain),
			);
			type ChainContext = typeof chain extends Chain<infer _> ? _ : never;
			type ExpectedContext = true2NodeInContext;
			expectTypeOf<ChainContext>().toEqualTypeOf<ExpectedContext>();

			type IdsInChain = typeof chain extends Chain<any, infer Ids>
				? Ids
				: never;
			expectTypeOf<IdsInChain>().toEqualTypeOf<
				["start", "true2", "something", "end"]
			>();
		});

		test("can connect to if true/false nodes", () => {
			Chain.start(new NoOp("start"))
				.next(baseifNode().true(trueNode).false(falseNode))
				.connect(["true", "false"], ({ $ }) => {
					return new NoOp("connect", {
						parameters: {
							message: $("true.hello"),
							something: $("false.something"),
						},
					});
				});
		});

		test.failing("fails with invalid node id", () => {
			Chain.start(new NoOp("start"))
				.next(baseifNode().true(trueNode).false(falseNode))
				// @ts-expect-error: invalid node id
				.connect(["invalid", "false"], new NoOp("connect"));
		});
	});
});
