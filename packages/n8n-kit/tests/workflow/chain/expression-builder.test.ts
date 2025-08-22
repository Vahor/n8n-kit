import { describe, expect, test } from "bun:test";
import { $$ } from "../../../src";

type Context = {
	a: { hello: "a" };
	Webhook: {
		body: {
			fields: {
				hello: "world";
			};
		};
	};
	"Http Request": {
		"something.with.dots": {
			"a number?": 1;
		};
		"something with spaces": {
			field: "value";
		};
	};
	json: {
		"a.b.c": {
			"d.e.f": number;
		};
	};
};

const $ = $$<Context>();

describe("ExpressionBuilder", () => {
	describe("getPath", () => {
		test("with dot notation one level", () => {
			const builder = $("a.hello");
			expect(builder.getPath()).toEqual("hello");
		});

		test("with dot notation two levels", () => {
			const builder = $("Webhook.body.fields.hello");
			expect(builder.getPath()).toEqual("body.fields.hello");
		});

		test("with bracket notation one level", () => {
			const builder = $("json['a.b.c']");
			expect(builder.getPath()).toEqual("['a.b.c']");
		});

		test("with bracket notation two levels", () => {
			const builder = $("json['a.b.c']['d.e.f']");
			expect(builder.getPath()).toEqual("['a.b.c']['d.e.f']");
		});

		test("with space 1st level", () => {
			const builder = $("['Http Request']['something with spaces'].field");
			expect(builder.getPath()).toEqual("['something with spaces'].field");
		});
		test("with space 2nd levels", () => {
			const builder = $("['Http Request']['something.with.dots']['a number?']");
			expect(builder.getPath()).toEqual("['something.with.dots']['a number?']");
		});
	});

	describe("getNodeId", () => {
		test("with dot notation one level", () => {
			const builder = $("a.hello");
			expect(builder.getNodeId()).toEqual("a");
		});

		test("with dot notation two levels", () => {
			const builder = $("Webhook.body.fields.hello");
			expect(builder.getNodeId()).toEqual("Webhook");
		});

		test("with bracket notation one level", () => {
			const builder = $("json['a.b.c']");
			expect(builder.getNodeId()).toEqual("json");
		});

		test("with bracket notation two levels", () => {
			const builder = $("json['a.b.c']['d.e.f']");
			expect(builder.getNodeId()).toEqual("json");
		});

		test("with space 1st level", () => {
			const builder = $("['Http Request']['something with spaces'].field");
			expect(builder.getNodeId()).toEqual("Http Request");
		});
		test("with space 2nd levels", () => {
			const builder = $("['Http Request']['something.with.dots']['a number?']");
			expect(builder.getNodeId()).toEqual("Http Request");
		});
	});

	describe("call", () => {
		test("call arbitrary method on json", () => {
			const builder = $("json['a.b.c']").call("keys");
			const format = builder.format();
			expect(format).toEqual(`$json['a.b.c'].keys()`);
		});
		test("call arbitrary method with parameters", () => {
			const builder = $("json['a.b.c']").call("keys", "a", "b");
			const format = builder.format();
			expect(format).toEqual(`$json['a.b.c'].keys('a', 'b')`);
		});

		test("chaining method calls", () => {
			const builder = $("json['a.b.c']")
				.call("keys")
				.call("map", (key: string) => key.toUpperCase())
				.call("join", ", ");
			const format = builder.format();
			expect(format).toEqual(
				`$json['a.b.c'].keys().map((key) => key.toUpperCase()).join(', ')`,
			);
		});
	});

	describe("prop", () => {
		test("get bracket notation property", () => {
			const builder = $("json['a.b.c']").prop("['d.e.f']");
			const format = builder.format();
			expect(format).toEqual(`$json['a.b.c']['d.e.f']`);
		});
		test("get dot notation property", () => {
			const builder = $("a").prop(".hello");
			const format = builder.format();
			expect(format).toEqual(`$('a').hello`);
		});
	});
});
