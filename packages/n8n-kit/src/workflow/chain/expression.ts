import type { Writeable } from "../../utils/types";
import { ExpressionBuilder } from "./expression-builder";

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

export class JsonExpression<Type = any> {
	/**
	 * Only used to infer the type of the data
	 */
	infer: Type = null as any;

	constructor(private data: Type) {}

	public static from<const T>(
		data: T,
	): JsonExpression<Writeable<InferJsonExpression<T>>> {
		return new JsonExpression(data) as any;
	}

	public toExpression(options?: { indent?: number }) {
		let data = JSON.stringify(this.data, null, options?.indent ?? 0);
		// TODO: add a test for the <no-quotes> part
		data = data.replace(/"<no-quotes>\{\{\s*(.*?)\s*\}\}"/g, "{{ $1 }}");
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
