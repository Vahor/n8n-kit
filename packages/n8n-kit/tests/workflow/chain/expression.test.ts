import { describe, expect, expectTypeOf, test } from "bun:test";
import { $$ } from "../../../src";
import { expr, JsonExpression } from "../../../src/workflow/chain/expression";

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
				name: "{{ $('user').name }}",
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
				"{{ $('user').age }}",
				"static",
				"{{ $('user').email }}",
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
					name: "{{ $('user').name }}",
					age: "{{ $('user').age }}",
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
						id: "{{ $('data').items[0].id }}",
						value: "{{ $('data').items[0].value }}",
					},
					{
						id: "{{ $('data').items[1].id }}",
						value: "{{ $('data').items[1].value }}",
						nested: {
							value: "{{ $('data').items[1].sub.nested }}",
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
				data: "{{ $('data') }}",
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
});
