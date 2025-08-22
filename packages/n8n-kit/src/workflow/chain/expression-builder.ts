import type { JoinKeys, TypeOfField } from "../../utils/types";
import type { ChainContext } from "./chain";
import { expr } from "./expression";

type ExtractNodeId<T extends string> =
	T extends `['${infer NodeId}'][${infer _Rest}`
		? NodeId
		: T extends `${infer NodeId}[${infer _Rest}`
			? NodeId
			: T extends `${infer NodeId}.${infer _Rest}`
				? NodeId
				: never;

// TODO: split into two types
type ExtractPath<T extends string> =
	T extends `['${infer _NodeId}']['${infer Rest}'].${infer _Rest2}`
		? `['${Rest}'].${_Rest2}`
		: T extends `['${infer _NodeId}']['${infer Rest}']`
			? `['${Rest}']`
			: T extends `${infer _NodeId}['${infer Rest}']`
				? `['${Rest}']`
				: T extends `${infer _NodeId}.${infer Rest}['${infer _Rest2}']`
					? `['${Rest}']['${_Rest2}']`
					: T extends `${infer _NodeId}.${infer Rest}`
						? Rest
						: never;

type ExtractStartingWith<
	T extends string,
	Prefix extends string,
> = T extends `${Prefix}${infer Rest}` ? Rest : never;
type SubPath<T extends ChainContext, Path extends string> = ExtractStartingWith<
	JoinKeys<T>,
	Path
>;

export class ExpressionBuilder<T extends ChainContext, Path extends string> {
	private readonly path: Path;
	private readonly methodCalls: string[] = [];

	constructor(path: Path, methodCalls: string[] = []) {
		this.path = path;
		this.methodCalls = methodCalls;
	}

	private clone(additionalMethodCall?: string): ExpressionBuilder<T, Path> {
		const newMethodCalls = additionalMethodCall
			? [...this.methodCalls, additionalMethodCall]
			: [...this.methodCalls];
		return new ExpressionBuilder(this.path, newMethodCalls);
	}

	/**
	 * Should only be used with `typeof`
	 * Returns null.
	 */
	public getType(): TypeOfField<Path, T> {
		return null as any;
	}

	public getFullPath(): Path {
		return this.path;
	}

	public getNodeId(): ExtractNodeId<Path> {
		// nodeId is bracket notation
		const bracketMatch = this.path.match(/^\['[^\]]+'\]/);
		const isBracketNotation = bracketMatch?.[0];
		if (isBracketNotation) {
			return bracketMatch[0].slice(2, -2) as any;
		}

		const firstPart = this.path.split(/[[.]/)[0];
		return firstPart as any;
	}

	public getPath(): ExtractPath<Path> {
		const nodeId = this.getNodeId();
		// handle brackets
		if (this.path.startsWith("[")) {
			return this.path.replace(`['${nodeId}']`, "") as any;
		}
		const rest = this.path.replace(nodeId, "");
		if (rest.startsWith(".")) {
			return rest.slice(1) as any;
		}
		return rest as any;
	}

	public format(): string {
		const nodeId = this.getNodeId();
		let baseExpression: string;

		let path = this.getPath() as string;
		if (!path.startsWith("[")) path = `.${path}`;

		if (nodeId === "json") {
			baseExpression = `$json${path}`;
		} else {
			baseExpression = `$('${nodeId}')${path}`;
		}

		// Append method calls
		if (this.methodCalls.length > 0) {
			return baseExpression + this.methodCalls.join("");
		}

		return baseExpression;
	}

	/**
	 * return ={{ format() }}
	 */
	public toExpression() {
		return expr`${this}`;
	}

	//
	/**
	 * Arbitrary method call
	 */
	public call(methodName: string, ...args: any[]): ExpressionBuilder<T, Path> {
		const params = args
			.map((arg) => {
				if (typeof arg === "string") {
					return `'${arg.replace(/'/g, "\\'")}'`;
				}
				if (typeof arg === "function") {
					return arg.toString();
				}
				return JSON.stringify(arg);
			})
			.join(", ");

		const methodCall =
			params.length > 0 ? `.${methodName}(${params})` : `.${methodName}()`;
		return this.clone(methodCall);
	}

	// Property access
	public prop(propertyName: SubPath<T, Path>): ExpressionBuilder<T, Path> {
		return this.clone(`${propertyName}`);
	}
}

export function $$<T extends ChainContext>() {
	return <Path extends JoinKeys<T>>(path: Path): ExpressionBuilder<T, Path> =>
		new ExpressionBuilder<T, Path>(path);
}

export type ExpressionBuilderProvider<CC extends ChainContext> = ReturnType<
	typeof $$<CC>
>;
