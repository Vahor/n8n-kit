export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export type AnyString = string & {};

export type IsNever<T> = [T] extends [never] ? true : false;

export type IsRecord<T> = string extends keyof T ? true : false;

export type IsAny<T> = 0 extends 1 & T ? true : false;

export type IsNullable<T> = T extends null ? true : false;

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

export type OnlyRootLevel<T> = T extends `${infer _1}.${infer _2}` ? never : T;

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

export type Last<T extends any[]> = T extends [...any[], infer _Last]
	? _Last
	: never;
