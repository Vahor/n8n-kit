import { describe, expect, expectTypeOf, test } from "bun:test";
import { $$ } from "../../../src";
import {
	applyToExpression,
	expr,
	JsonExpression,
	resolveExpressionValue,
} from "../../../src/workflow/chain/expression";
import { ExpressionBuilder } from "../../../src/workflow/chain/expression-builder";

type Context = {
	user: {
		name: string;
		email: string;
		age: number;
		properties: Array<{
			type: string;
			value: string;
		}>;
	};
	data: {
		items: Array<{
			id: number;
			value: string;
			sub: {
				nested: string;
			};
		}>;
	};
};

const $ = $$<Context>();

describe("JsonExpression", () => {
	test("handles simple object with expression builder", () => {
		const obj = {
			name: $("user.name"),
			static: "value",
		};

		const result = JsonExpression.from(obj);
		expectTypeOf<typeof result.infer>().toEqualTypeOf<{
			name: string;
			static: string;
		}>();

		expect(result.toExpression()).toEqual(
			`=${JSON.stringify({
				name: "{{ $('user').item.json.name }}",
				static: "value",
			})}`,
		);
		expect(result.toExpression()).toEqual(expr`${JSON.stringify(obj)}`);
	});

	test("handles const arrays with expressions", () => {
		const arr = [$("user.age"), "static", $("user.email")] as const;

		const result = JsonExpression.from(arr);
		expectTypeOf<typeof result.infer>().toEqualTypeOf<
			[number, "static", string]
		>();

		expect(result.toExpression()).toEqual(
			`=${JSON.stringify([
				"{{ $('user').item.json.age }}",
				"static",
				"{{ $('user').item.json.email }}",
			])}`,
		);
		expect(result.toExpression()).toEqual(expr`${JSON.stringify(arr)}`);
	});

	test("handles objects within arrays", () => {
		const result = JsonExpression.from([
			{
				name: $("user.name"),
				age: $("user.age"),
			},
			{
				name: "static",
				age: 30,
			},
		]);
		expectTypeOf<typeof result.infer>().toEqualTypeOf<
			[
				{
					name: string;
					age: number;
				},
				{
					name: "static";
					age: 30;
				},
			]
		>();

		expect(result.toExpression()).toEqual(
			`=${JSON.stringify([
				{
					name: "{{ $('user').item.json.name }}",
					age: "{{ $('user').item.json.age }}",
				},
				{
					name: "static",
					age: 30,
				},
			])}`,
		);
	});

	test("handles arrays within objects", () => {
		const result = JsonExpression.from({
			items: [
				{
					id: $("data.items[0].id"),
					value: $("data.items[0].value"),
				},
				{
					id: $("data.items[1].id"),
					value: $("data.items[1].value"),
					nested: {
						value: $("data.items[1].sub.nested"),
					},
				},
			],
		});
		expectTypeOf<typeof result.infer>().toEqualTypeOf<{
			items: [
				{
					id: number;
					value: string;
				},
				{
					id: number;
					value: string;
					nested: {
						value: string;
					};
				},
			];
		}>();

		expect(result.toExpression()).toEqual(
			`=${JSON.stringify({
				items: [
					{
						id: "{{ $('data').item.json.items[0].id }}",
						value: "{{ $('data').item.json.items[0].value }}",
					},
					{
						id: "{{ $('data').item.json.items[1].id }}",
						value: "{{ $('data').item.json.items[1].value }}",
						nested: {
							value: "{{ $('data').item.json.items[1].sub.nested }}",
						},
					},
				],
			})}`,
		);
	});

	test("handles manually inserted expressions", () => {
		const result = JsonExpression.from({
			data: $("data"),
			manual: `{{ $now }}` as string,
			// TODO: would be nice to have a typed way to do this
			long_json: `
{{
	JSON.stringify({
		name: $('user').name,
		age: $('user').age
	})
}}
` as string,
		});
		expectTypeOf<typeof result.infer>().toEqualTypeOf<{
			data: Context["data"];
			manual: string;
			long_json: string;
		}>();

		expect(result.toExpression()).toEqual(
			`=${JSON.stringify({
				data: "{{ $('data').item.json }}",
				manual: "{{ $now }}",
				long_json: `
{{
	JSON.stringify({
		name: $('user').name,
		age: $('user').age
	})
}}
`,
			})}`,
		);
	});

	test("handles empty arrays and objects", () => {
		const empty = {
			emptyArray: [],
			emptyObject: {},
			arrayWithEmpty: [{}],
			objectWithEmpty: { nested: [] },
		};

		const result = JsonExpression.from(empty);

		expect(result.toExpression()).toEqual(
			`=${JSON.stringify({
				emptyArray: [],
				emptyObject: {},
				arrayWithEmpty: [{}],
				objectWithEmpty: { nested: [] },
			})}`,
		);
	});

	test("handles expressions with underscore prefix", () => {
		const obj = {
			name: $("user.name"),
			prefixed: $("user.email").prefix("_"),
			static: "value",
		};

		const result = JsonExpression.from(obj);
		expectTypeOf<typeof result.infer>().toEqualTypeOf<{
			name: string;
			prefixed: string;
			static: string;
		}>();

		expect(result.toExpression()).toEqual(
			`=${JSON.stringify({
				name: "{{ $('user').item.json.name }}",
				prefixed: "{{ _('user').item.json.email }}",
				static: "value",
			})}`,
		);
	});

	test("handles <no-quotes> expressions with toJsonString()", () => {
		const obj = {
			name: $("user.name"),
			jsonValue: $("data").toJsonString(),
			static: "value",
		};

		const result = JsonExpression.from(obj);

		expect(result.toExpression()).toEqual(
			`={"name":"{{ $('user').item.json.name }}","jsonValue":{{ $('data').item.json.toJsonString() }},"static":"value"}`,
		);
	});

	test("handles withPrefix: false", () => {
		const obj = {
			static: "value",
			raw: `={{ $now }}`,
			expr: expr`{{ $now }}`,
		};

		const result = JsonExpression.from(obj);

		expect(result.toExpression({ withPrefix: false })).toEqual(
			`{"static":"value","raw":"{{ $now }}","expr":"{{ $now }}"}`,
		);
	});

	test("does not strip '=' when not a leading token", () => {
		const obj = {
			mixed: "prefix ={{ $now }} suffix",
		};
		const result = JsonExpression.from(obj);
		expect(
			result.toExpression({
				withPrefix: false,
				removeCurly: true,
				removeEquals: true,
			}),
		).toEqual(JSON.stringify({ mixed: "prefix ={{ $now }} suffix" }));
	});

	test("handles removeCurly: true", () => {
		const obj = {
			name: $("user.name"),
			jsonValue: $("data").toJsonString(),
			data: $("data"),
			static: "value",
			raw: `={{ $now }}`,
			expr: expr`{{ $now }}`,
		};

		const result = JsonExpression.from(obj);

		expect(
			result.toExpression({ removeCurly: true, withPrefix: false }),
		).toEqual(
			`{"name":$('user').item.json.name,"jsonValue":$('data').item.json.toJsonString(),"data":$('data').item.json,"static":"value","raw":$now,"expr":$now}`,
		);
	});
});

describe("ExpressionOrValue utilities", () => {
	test("resolveExpressionValue handles ExpressionBuilder", () => {
		const expressionBuilder = $("user.name");
		const result = resolveExpressionValue(expressionBuilder);

		expect(result).toBe("={{ $('user').item.json.name }}");
	});

	test("resolveExpressionValue handles raw value", () => {
		const stringValue = "static value";
		const result = resolveExpressionValue(stringValue);

		expect(result).toBe("static value");
	});
});

describe("applyToExpression", () => {
	test("transforms single ExpressionBuilder", () => {
		const expr = $("user.name");
		const result = applyToExpression(expr, (e) => e.prefix("_"));

		expect((result as any).format()).toBe("_('user').item.json.name");
	});

	test("transforms ExpressionBuilder in nested structures", () => {
		const complex = {
			user: {
				profile: {
					name: $("user.name"),
					details: [$("user.email"), $("user.age")],
				},
				settings: {
					theme: "dark",
					notifications: $("user.properties[0].value"),
				},
			},
			metadata: [
				{
					id: $("data.items[0].id"),
					nested: {
						value: $("data.items[0].sub.nested"),
					},
				},
			],
		};

		const result = applyToExpression(complex, (expr) => expr.prefix("_"));

		expect(result.user.profile.name.format()).toBe("_('user').item.json.name");
		expect(result.user.profile.details[0]!.format()).toBe(
			"_('user').item.json.email",
		);
		expect(result.user.profile.details[1]!.format()).toBe(
			"_('user').item.json.age",
		);
		expect(result.user.settings.theme).toBe("dark");
		expect((result.user.settings.notifications as any).format()).toBe(
			"_('user').item.json.properties[0].value",
		);
		expect((result.metadata[0]!.id as any).format()).toBe(
			"_('data').item.json.items[0].id",
		);
		expect((result.metadata[0]!.nested.value as any).format()).toBe(
			"_('data').item.json.items[0].sub.nested",
		);
	});
});
