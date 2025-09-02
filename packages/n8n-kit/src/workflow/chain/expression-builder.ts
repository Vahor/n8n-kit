import type {
	ErrorMessage,
	IsAny,
	JoinKeys,
	TypeOfField,
} from "../../utils/types";
import type { ChainContext, ExtractChainContext } from "./chain";
import { expr } from "./expression";

type ReplaceBracketsWithString<T extends string> =
	// TODO: we'll have an issue with two brackets in a same string
	T extends `${infer _1}[${infer _2}]${infer _3}` ? `${_1}[${string}]${_3}` : T;

type ExtractStartingWith<
	T extends string,
	Prefix extends string,
> = T extends `${Prefix}${infer Rest}`
	? Rest extends ""
		? never
		: Rest
	: never;

type SubPath<T extends ChainContext, Path extends string> = ExtractStartingWith<
	JoinKeys<T>,
	ReplaceBracketsWithString<Path>
>;

type ExpectedArray = ErrorMessage<"Expected array">;
type ExpectedString = ErrorMessage<"Expected string">;

type ExpressionBuilderMode = "item";
/** @hidden */
export type ExpressionPrefix = "$" | "_";

type ExpressionBuilderOptions = {
	mode: ExpressionBuilderMode;
	prefix: ExpressionPrefix;
	noQuotes: boolean;
};

const replaceDoubleQuotes = (str: string) => str.replace(/"/g, "'");

export class ExpressionBuilder<
	T extends ChainContext = any,
	Path extends string = any,
	TCurr = TypeOfField<Path, T>,
> {
	private readonly path: Path;
	private readonly methodCalls: string[] = [];

	private options: ExpressionBuilderOptions = {
		mode: "item",
		prefix: "$",
		noQuotes: false,
	};

	/**
	 * The type of the current field
	 * Should only be used with `typeof`
	 * Returns null.
	 */
	public readonly type: TCurr = null as any;

	constructor(
		path: Path,
		methodCalls: string[] = [],
		// TODO: make a "options" object or something to group all options
		options?: ExpressionBuilderOptions,
	) {
		this.path = path;
		this.methodCalls = methodCalls;
		this.options = {
			mode: options?.mode ?? "item",
			prefix: options?.prefix ?? "$",
			noQuotes: options?.noQuotes ?? false,
		};
	}

	private clone(additionalMethodCall?: string): ExpressionBuilder<T, Path> {
		const newMethodCalls = additionalMethodCall
			? [...this.methodCalls, additionalMethodCall]
			: [...this.methodCalls];
		return new ExpressionBuilder(this.path, newMethodCalls, this.options);
	}

	public getFullPath(): Path {
		return this.path;
	}

	public mode(mode: ExpressionBuilderMode): this {
		if (this.options.mode === mode) return this;
		return new ExpressionBuilder(this.path, this.methodCalls, {
			...this.options,
			mode,
		}) as any;
	}

	public prefix(prefix: ExpressionPrefix): this {
		if (this.options.prefix === prefix) return this;
		return new ExpressionBuilder(this.path, this.methodCalls, {
			...this.options,
			prefix,
		}) as any;
	}

	public noQuotes(value = true): this {
		if (this.options.noQuotes === value) return this;
		return new ExpressionBuilder(this.path, this.methodCalls, {
			...this.options,
			noQuotes: value,
		}) as any;
	}

	public getNodeId(): string {
		// nodeId is bracket notation
		const bracketMatch = this.path.match(/^\['[^\]]+'\]/);
		const isBracketNotation = bracketMatch?.[0];
		if (isBracketNotation) {
			return bracketMatch[0].slice(2, -2) as any;
		}

		const firstPart = this.path.split(/[[.]/)[0];
		return firstPart as any;
	}

	public getPath(): string {
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
		if (path.length > 0 && path[0] !== "." && path[0] !== "[")
			path = `.${path}`;

		if (this.options.mode === "item") {
			if (nodeId === "json") {
				baseExpression = `${this.options.prefix}json${path}`;
			} else {
				baseExpression = `${this.options.prefix}('${nodeId}').item.json${path}`;
			}
		} else {
			throw new Error(`Unexpected mode: ${this.options.mode}`);
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
		// Feels very hack, and it is
		// Used in JsonExpression.toExpression to remove quotes when we don't need them
		return expr`${this.options.noQuotes ? "<no-quotes>" : ""}${this}`;
	}
	/*
	 * @internal
	 * Used by JSON.stringify
	 *
	 * Return {{ format() }}
	 */
	public toJSON() {
		return this.toExpression().slice(1);
	}

	//
	/**
	 * Arbitrary method call
	 */
	public call(methodName: string, ...args: any[]): ExpressionBuilder<T, any> {
		const params = args
			.map((arg) => {
				if (typeof arg === "function") {
					return replaceDoubleQuotes(arg.toString());
				}
				return JSON.stringify(arg);
			})
			.join(", ");

		const methodCall =
			params.length > 0 ? `.${methodName}(${params})` : `.${methodName}()`;
		return this.clone(methodCall);
	}

	// =========
	// All types
	// =========

	toJsonString: () => this = () => {
		return this.noQuotes(true).call("toJsonString") as any;
	};

	// =========
	// Array
	// =========

	find: TCurr extends Array<infer TElem>
		? (
				predicate: (item: TElem) => boolean,
			) => ExpressionBuilder<T, `${Path}[${number}]`>
		: ExpectedArray = ((predicate: any) => {
		return this.call("find", predicate) as any;
	}) as any;
	filter: TCurr extends Array<infer TElem>
		? (predicate: (item: TElem) => boolean) => this
		: ExpectedArray = ((predicate: any) => {
		return this.call("filter", predicate) as any;
	}) as any;
	join: TCurr extends Array<any>
		? (separator: string) => ExpressionBuilder<any, any, string>
		: ExpectedArray = ((predicate: any) => {
		return this.call("join", predicate) as any;
	}) as any;
	first: TCurr extends Array<any>
		? () => ExpressionBuilder<T, `${Path}[${number}]`>
		: ExpectedArray = (() => {
		return this.call("first") as any;
	}) as any;
	last: TCurr extends Array<any>
		? () => ExpressionBuilder<T, `${Path}[${number}]`>
		: ExpectedArray = (() => {
		return this.call("last") as any;
	}) as any;

	// =========
	// Strings
	// =========

	toLowerCase: TCurr extends string ? () => this : ExpectedString = (() => {
		return this.call("toLowerCase") as any;
	}) as any;
	toUpperCase: TCurr extends string ? () => this : ExpectedString = (() => {
		return this.call("toUpperCase") as any;
	}) as any;
	trim: TCurr extends string ? () => this : ExpectedString = (() => {
		return this.call("trim") as any;
	}) as any;
	split: TCurr extends string
		? (separator: string) => ExpressionBuilder<any, any, Array<string>>
		: ExpectedString = ((separator: any) => {
		return this.call("split", separator) as any;
	}) as any;

	// Property access
	// TODO: check if we can add a Proxy on the class to intercept property access and automatically call prop (still keeping the type)
	public prop<P extends SubPath<T, Path>>(
		propertyName: IsAny<Path> extends true ? string : P,
	): ExpressionBuilder<T, IsAny<Path> extends true ? any : `${Path}${P}`> {
		return this.clone(`${propertyName}`) as any;
	}
}

/** @hidden */
export function $$<T extends ChainContext>() {
	return <Path extends JoinKeys<T>>(path: Path): ExpressionBuilder<T, Path> =>
		new ExpressionBuilder<T, Path>(path);
}

export type ExpressionBuilderProvider<CC extends ChainContext> = ReturnType<
	typeof $$<CC>
>;

export type $Selector<T> = ExpressionBuilderProvider<ExtractChainContext<T>>;
