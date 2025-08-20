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

	public getPath(): Path {
		return this.path;
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
