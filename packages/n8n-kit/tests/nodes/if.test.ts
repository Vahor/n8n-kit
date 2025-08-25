import { describe, test } from "bun:test";
import { Chain } from "../../src";
import { If } from "../../src/nodes";
import { NoOp } from "../../src/nodes/generated";

describe("If", () => {
	describe("type test, cannot chain two true/false", () => {
		test("true().true()", () => {
			new If("if", {
				conditions: [],
			})
				.true(new NoOp("true"))
				// @ts-expect-error: this should fail
				.true(new NoOp("false"));
		});
		test("false().false()", () => {
			new If("if", {
				conditions: [],
			})
				.false(new NoOp("false"))
				// @ts-expect-error: this should fail
				.false(new NoOp("true"));
		});
		test("true().false()", () => {
			new If("if", {
				conditions: [],
			})
				.true(new NoOp("true"))
				// this works
				.false(new NoOp("true"));
		});
		test("false().true()", () => {
			new If("if", {
				conditions: [],
			})
				.false(new NoOp("false"))
				// this works
				.true(new NoOp("false"));
		});
	});

	describe("type test, chaining if -> true/false -> connect, we have access to the context of the if", () => {
		test("can connect to if true/false nodes", () => {
			const _ = Chain.start(new NoOp("start"))
				.next(
					new If("if", {
						conditions: [],
					})
						.true(new NoOp("true"))
						.false(new NoOp("false")),
				)
				// TODO: https://github.com/Vahor/n8n-kit/issues/14
				// @ts-expect-error: we have access to the context of the if
				.connect(["true", "false"], new NoOp("connect"));
		});
	});
});
