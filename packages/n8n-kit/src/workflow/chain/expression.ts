import { ExpressionBuilder } from "./expression-builder";

export function expr(strings: TemplateStringsArray, ...values: any[]) {
	const result = strings.reduce((acc, cur, i) => {
		const value = values[i];

		if (value instanceof ExpressionBuilder) {
			return `${cur}{{·${value.format()}·}}`;
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
