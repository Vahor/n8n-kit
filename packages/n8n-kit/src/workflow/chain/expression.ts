import type { Writeable } from "../../utils/types";
import { ExpressionBuilder } from "./expression-builder";

/**
 * Template literal function for creating n8n expressions.
 * Combines string literals with ExpressionBuilder instances and other values
 * to produce n8n-compatible expression strings.
 *
 * Format to `string{{ expression.format() }}`
 *
 * @param strings - Template string array from template literal
 * @param values - Interpolated values (ExpressionBuilder instances, strings, etc.)
 * @returns n8n expression string prefixed with '='
 * @throws Error if unsupported value type is provided
 */
export function expr(strings: TemplateStringsArray, ...values: any[]) {
	const result = strings.reduce((acc, cur, i) => {
		const value = values[i];

		if (value instanceof ExpressionBuilder) {
			return `${acc + cur}{{ ${value.format()} }}`;
		}

		if (typeof value === "string") {
			return acc + cur + value;
		}

		if (value != null) {
			throw new Error(`Failed to parse expression, got ${value}`);
		}

		return acc + cur;
	}, "");

	return `=${result}`;
}

type InferJsonExpression<T> = T extends readonly any[] | Record<string, any>
	? {
			[K in keyof T]: T[K] extends ExpressionBuilder<any, any, infer U>
				? U
				: T[K] extends Array<any> | Record<string, any>
					? InferJsonExpression<T[K]>
					: T[K];
		}
	: never;

/**
 * Class for creating JSON-based n8n expressions with type safety.
 * Allows combining static JSON data with ExpressionBuilder instances
 * to create complex n8n expressions.
 */
export class JsonExpression<Type = any> {
	/**
	 * Only used to infer the type of the data
	 */
	infer: Type = null as any;

	constructor(private data: Type) {}

	/**
	 * Factory method to create a JsonExpression with proper type inference.
	 * Recursively infers types from nested ExpressionBuilder instances.
	 *
	 * @param data - The data structure containing JSON and ExpressionBuilder instances
	 * @returns A JsonExpression with inferred types
	 */
	public static from<const T>(
		data: T,
	): JsonExpression<Writeable<InferJsonExpression<T>>> {
		return new JsonExpression(data) as any;
	}

	/**
	 * Converts the JsonExpression to an n8n expression string.
	 * Serializes the data to JSON and processes special markers to inject expressions.
	 *
	 * @param options - Formatting options
	 * @param options.indent - Number of spaces for JSON indentation (default: 0)
	 * @param options.withPrefix - Whether to prefix with '=' (default: true)
	 * @param options.removeCurly - Whether to remove curly braces from expressions (`{{ x }}` => `x`) (default: false)
	 * @param options.removeEquals - Whether to remove equals signs from expressions (`=x` => `x`) (default: true)
	 * @returns n8n-compatible expression string
	 */
	public toExpression(options?: {
		indent?: number;
		withPrefix?: boolean;
		removeCurly?: boolean;
		removeEquals?: boolean;
	}) {
		let data = JSON.stringify(this.data, null, options?.indent ?? 0);
		// remove =sign from expressions
		if (!options || options.removeEquals !== false) {
			data = data.replace(/"=\{\{\s*(.*?)\s*\}\}"/g, '"{{ $1 }}"');
		}
		if (options?.removeCurly) {
			data = data.replace(/"<no-quotes>\{\{\s*(.*?)\s*\}\}"/g, "$1");
			data = data.replace(/"{{\s*(.*?)\s*}}"/g, "$1");
		} else {
			data = data.replace(/"<no-quotes>\{\{\s*(.*?)\s*\}\}"/g, "{{ $1 }}");
		}
		if (options && options.withPrefix === false) return data;
		return `=${data}`;
	}
}

/**
 * Type utility for values that can be either an ExpressionBuilder or a direct value
 */
export type ExpressionOrValue<T> = ExpressionBuilder<any, any, T> | T;

/**
 * Resolves an ExpressionOrValue to its string representation for use in n8n workflows.
 * If the value is an ExpressionBuilder, returns its expression string.
 * Otherwise, returns the value as-is.
 *
 * @param value - The value to resolve, either an ExpressionBuilder or direct value
 * @returns The resolved value (expression string for ExpressionBuilder, original value otherwise)
 */
export function resolveExpressionValue<T>(
	value: ExpressionOrValue<T>,
): T | string {
	if (value instanceof ExpressionBuilder) {
		return value.toExpression();
	}
	return value;
}

/**
 * @internal
 *
 * Recursively applies a transformation function to all ExpressionBuilder instances
 * within a nested object structure. This utility function is used to modify expressions
 * throughout complex data structures while preserving the overall structure.
 *
 * The function performs a deep traversal of the object, identifying ExpressionBuilder
 * instances at any nesting level and applying the provided transformation function
 * to each one. Other values (primitives, null, etc.) are left unchanged.
 *
 * @param obj - The object to traverse and transform
 * @param fn - Transformation function to apply to each ExpressionBuilder instance
 * @returns A new object with the same structure but transformed ExpressionBuilder instances
 *
 * @example
 * ```typescript
 * const data = {
 *   name: "test",
 *   expr: $("item.id"),
 *   nested: {
 *     value: $("item.value")
 *   }
 * };
 *
 * const transformed = applyToExpression(data, (expr) => expr.prefix("_"));
 * // Result: ExpressionBuilder instances are transformed, other values unchanged
 * ```
 */
export function applyToExpression<T>(
	obj: T,
	fn: (expression: ExpressionBuilder) => ExpressionBuilder,
): T {
	if (obj instanceof ExpressionBuilder) {
		return fn(obj) as unknown as T;
	}

	// Recursively process arrays, transforming any ExpressionBuilder elements
	if (Array.isArray(obj)) {
		return obj.map((v) => applyToExpression(v, fn)) as T;
	}

	// Object
	if (obj !== null && typeof obj === "object") {
		const out: Record<string, unknown> = {};
		for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
			out[key] = applyToExpression(value as any, fn);
		}
		return out as unknown as T;
	}

	// Primitive
	return obj;
}
