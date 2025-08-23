import { describe, test } from "bun:test";
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
});
