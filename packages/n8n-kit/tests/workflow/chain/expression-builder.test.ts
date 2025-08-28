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
			again: Array<{
				and_again: string;
			}>;
		};
	};
	json: {
		"a.b.c": {
			"d.e.f": number;
		};
	};
	data: {
		output: Array<{
			type: string;
			content: Array<{
				type: string;
				text: string;
			}>;
		}>;
	};
};

const $ = $$<Context>();

describe("ExpressionBuilder", () => {
	describe("call", () => {
		test("call arbitrary method on json", () => {
			const builder = $("json['a.b.c']").call("keys");
			const format = builder.format();
			expect(format).toEqual(`$json['a.b.c'].keys()`);
		});
		test("call arbitrary method with parameters", () => {
			const builder = $("json['a.b.c']").call("keys", "a", "b");
			const format = builder.format();
			expect(format).toEqual(`$json['a.b.c'].keys("a", "b")`);
		});

		test("chaining method calls", () => {
			const builder = $("json['a.b.c']")
				.call("keys")
				.call("map", (key: string) => key.toUpperCase())
				.call("join", ", ");
			const format = builder.format();
			expect(format).toEqual(
				`$json['a.b.c'].keys().map((key) => key.toUpperCase()).join(", ")`,
			);
		});
	});

	describe("fin", () => {
		test("on an array", () => {
			const builder = $("data.output")
				.find((o) => o.type === "message")
				.prop(".content[0].text");
			const format = builder.format();
			expect(format).toEqual(
				`$('data').output.find((o) => o.type === "message").content[0].text`,
			);
		});
		test("on something else", () => {
			// @ts-expect-error: this should fail
			$("data").find((o) => o.type === "message");
		});
	});

	describe("filter", () => {
		test("on an array", () => {
			const builder = $("data.output")
				.filter((o) => o.type === "message")
				.prop("[0].content")
				.find((o) => o.text.length > 0);

			const format = builder.format();
			expect(format).toEqual(
				`$('data').output.filter((o) => o.type === "message")[0].content.find((o) => o.text.length > 0)`,
			);
		});
		test("on something else", () => {
			// @ts-expect-error: this should fail
			$("data").filter((o) => o.type === "message");
		});
	});

	describe("first", () => {
		test("on an array", () => {
			const builder = $("data.output").first().prop(".content[0].text");
			const format = builder.format();
			expect(format).toEqual(`$('data').output.first().content[0].text`);
		});
		test("on a sub array", () => {
			const builder = $("data.output[0].content").first().prop(".text");
			const format = builder.format();
			expect(format).toEqual(`$('data').output[0].content.first().text`);
		});
		test("on a sub array in an object with brackets", () => {
			const builder = $("['Http Request']['something with spaces'].again")
				.first()
				.prop(".and_again");
			const format = builder.format();
			expect(format).toEqual(
				`$('Http Request')['something with spaces'].again.first().and_again`,
			);
		});
		test("on something else", () => {
			// @ts-expect-error: this should fail
			$("data").first();
		});
	});

	describe("split", () => {
		test("on a string", () => {
			const builder = $("data.output[0].content[0].text").split(" ");
			const format = builder.format();
			expect(format).toEqual(`$('data').output[0].content[0].text.split(" ")`);
		});
		test("on a string - then join", () => {
			const builder = $("data.output[0].content[0].text").split(" ").join("-");
			const format = builder.format();
			expect(format).toEqual(
				`$('data').output[0].content[0].text.split(" ").join("-")`,
			);
		});
		test("on something else", () => {
			// @ts-expect-error: this should fail
			$("data").toLowerCase();
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

		test("with array root", () => {
			const builder = $("data.output").prop("[0].content[0].text");
			const format = builder.format();
			expect(format).toEqual(`$('data').output[0].content[0].text`);
		});
	});
});
