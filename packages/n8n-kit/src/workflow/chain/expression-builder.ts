import type { ChainContext } from "./chain";

export type Primitive =
	| string
	| number
	| boolean
	| bigint
	| symbol
	| null
	| undefined;

export type JoinKeys<T, OnlyLeaf = false, Prefix extends string = ""> = {
	[K in keyof T]: T[K] extends Function
		? `${Prefix}${Extract<K, string>}`
		: T[K] extends Primitive | Array<Primitive> | Date
			? `${Prefix}${Extract<K, string>}`
			: T[K] extends object
				?
						| (OnlyLeaf extends true ? never : `${Prefix}${Extract<K, string>}`)
						| JoinKeys<T[K], OnlyLeaf, `${Prefix}${Extract<K, string>}.`>
				: `${Prefix}${Extract<K, string>}`;
}[keyof T];

export type OmitRootLevel<T> = T extends `${infer _1}.${infer _2}` ? T : never;

export type RecursiveDotNotation<
	T,
	Path extends string,
> = Path extends `${infer Key}.${infer Rest}`
	? Key extends keyof T
		? RecursiveDotNotation<T[Key], Rest>
		: never
	: Path extends keyof T
		? T[Path]
		: never;

export type TypeOfField<
	Field extends string,
	Context extends Record<string, unknown>,
> = RecursiveDotNotation<Context, Field>;

type ExtractNodeId<T extends string> =
	T extends `${infer NodeId}.${infer _Rest}` ? NodeId : never;

type ExtractPath<T extends string> = T extends `${infer _NodeId}.${infer Rest}`
	? Rest
	: never;

export class ExpressionBuilder<T extends ChainContext, Path extends string> {
	private readonly path: Path;

	constructor(path: Path) {
		this.path = path;
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
		const firstPart = this.path.split(".")[0];
		return firstPart as any;
	}

	public getPath(): ExtractPath<Path> {
		const rest = this.path.split(".").slice(1).join(".");
		return rest as any;
	}

	public toExpression() {
		const nodeId = this.getNodeId();
		if (nodeId === "json") {
			return `{{ $json.${this.getPath()} }}`;
		}
		return `{{ $('${nodeId}').${this.getPath()} }}`;
	}
}

export function $$<T extends ChainContext>() {
	return <Path extends OmitRootLevel<JoinKeys<T>>>(
		path: Path,
	): ExpressionBuilder<T, Path> => new ExpressionBuilder<T, Path>(path);
}

export type ExpressionBuilderProvider<CC extends ChainContext> = ReturnType<
	typeof $$<CC>
>;
