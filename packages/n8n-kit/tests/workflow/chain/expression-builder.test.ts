import { describe, expect, test } from "bun:test";
import { $$, RESOLVED_NODE_ID } from "../../../src";

type Context = {
	a: { hello: "a" };
	Webhook: {
		body: {
			fields: {
				hello: "world";
			};
		};
		headers: {
			"x-user-id": string;
		};
	};
	"Http Request": {
		hello: string;
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
	const formatCases = [
		[
			$("['Http Request'].hello"),
			`$('${RESOLVED_NODE_ID("Http Request")}').item.json.hello`,
		],
		[
			$("data.output[0].content[0].text"),
			`$('${RESOLVED_NODE_ID("data")}').item.json.output[0].content[0].text`,
		],
	] as const;
	describe("format", () => {
		test.each(formatCases)("format", (builder, expected) => {
			expect(builder.format()).toEqual(expected);
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

	describe("find", () => {
		test("on an array", () => {
			const builder = $("data.output")
				.find((o) => o.type === "message")
				.prop(".content[0].text");
			const format = builder.format();
			expect(format).toEqual(
				`$('${RESOLVED_NODE_ID("data")}').item.json.output.find((o) => o.type === 'message').content[0].text`,
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
				`$('${RESOLVED_NODE_ID("data")}').item.json.output.filter((o) => o.type === 'message')[0].content.find((o) => o.text.length > 0)`,
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
			expect(format).toEqual(
				`$('${RESOLVED_NODE_ID("data")}').item.json.output.first().content[0].text`,
			);
		});
		test("on a sub array", () => {
			const builder = $("data.output[0].content").first().prop(".text");
			const format = builder.format();
			expect(format).toEqual(
				`$('${RESOLVED_NODE_ID("data")}').item.json.output[0].content.first().text`,
			);
		});
		test("on a sub array in an object with brackets", () => {
			const builder = $("['Http Request']['something with spaces'].again")
				.first()
				.prop(".and_again");
			const format = builder.format();
			expect(format).toEqual(
				`$('${RESOLVED_NODE_ID("Http Request")}').item.json['something with spaces'].again.first().and_again`,
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
			expect(format).toEqual(
				`$('${RESOLVED_NODE_ID("data")}').item.json.output[0].content[0].text.split(" ")`,
			);
		});
		test("on a string - then join", () => {
			const builder = $("data.output[0].content[0].text").split(" ").join("-");
			const format = builder.format();
			expect(format).toEqual(
				`$('${RESOLVED_NODE_ID("data")}').item.json.output[0].content[0].text.split(" ").join("-")`,
			);
		});
		test("on something else", () => {
			// @ts-expect-error: this should fail
			$("data").toLowerCase();
		});
	});

	describe("toLowerCase", () => {
		test("on a string", () => {
			const builder = $("Webhook.headers['x-user-id']");
			const format = builder.format();
			expect(format).toEqual(
				`$('${RESOLVED_NODE_ID("Webhook")}').item.json.headers['x-user-id']`,
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
			expect(format).toEqual(`$('${RESOLVED_NODE_ID("a")}').item.json.hello`);
		});

		test("with array root", () => {
			const builder = $("data.output").prop("[0].content[0].text");
			const format = builder.format();
			expect(format).toEqual(
				`$('${RESOLVED_NODE_ID("data")}').item.json.output[0].content[0].text`,
			);
		});
	});

	describe("noQuotes", () => {
		test("toExpression with noQuotes false", () => {
			const builder = $("json['a.b.c']");
			const expression = builder.toExpression();
			expect(expression).toEqual("={{ $json['a.b.c'] }}");
		});

		test("toExpression with noQuotes true", () => {
			const builder = $("json['a.b.c']").noQuotes();
			const expression = builder.toExpression();
			expect(expression).toEqual("=<no-quotes>{{ $json['a.b.c'] }}");
		});

		test("toJsonString sets noQuotes to true", () => {
			const builder = $("json['a.b.c']").toJsonString();
			const expression = builder.toExpression();
			expect(expression).toEqual(
				"=<no-quotes>{{ $json['a.b.c'].toJsonString() }}",
			);
		});

		test("noQuotes can be toggled", () => {
			const builder = $("json['a.b.c']").noQuotes(true).noQuotes(false);
			const expression = builder.toExpression();
			expect(expression).toEqual("={{ $json['a.b.c'] }}");
		});

		test("noQuotes with method calls", () => {
			const builder = $("data.output")
				.filter((o) => o.type === "message")
				.noQuotes();
			const expression = builder.toExpression();
			expect(expression).toEqual(
				`=<no-quotes>{{ $('${RESOLVED_NODE_ID("data")}').item.json.output.filter((o) => o.type === 'message') }}`,
			);
		});
	});
});
