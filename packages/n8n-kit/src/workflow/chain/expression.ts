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
				: T[K] extends Record<string, any>
					? InferJsonExpression<T[K]>
					: T[K] extends Array<any>
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
		return `=${JSON.stringify(this.data, null, options?.indent ? 2 : 0)}`;
	}
}
