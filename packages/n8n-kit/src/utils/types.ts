export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export type Writeable<T> = { -readonly [P in keyof T]: Writeable<T[P]> };

export type UnionToIntersection<U> = (
	U extends any
		? (k: U) => void
		: never
) extends (k: infer I) => void
	? Prettify<I>
	: never;

export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type AnyString = string & {};

export type IsNever<T> = [T] extends [never] ? true : false;

export type IsRecord<T> = string extends keyof T ? true : false;

export type IsAny<T> = 0 extends 1 & T ? true : false;

export type IsUnknown<T> = IsAny<T> extends true
	? false
	: unknown extends T
		? true
		: false;

export type IsNullable<T> = IsNever<T> extends true
	? false
	: T extends null
		? true
		: false;

export type Primitive =
	| string
	| number
	| boolean
	| bigint
	| symbol
	| null
	| undefined;

export type NeedsBrackets<T> = T extends
	| `${any}.${any}`
	| `${any} ${any}`
	| `${any}-${any}`
	? true
	: false;

type FormatWithPrefix<
	T extends string,
	Prefix extends string,
> = NeedsBrackets<T> extends true
	? `${Prefix}['${T}']`
	: Prefix extends ""
		? T
		: `${Prefix}.${T}`;

type NumberStr = `${number}`;

export type JoinKeys<T, Prefix extends string = ""> = {
	[K in keyof T]: IsNever<T[K]> extends true
		? never
		: T[K] extends Function
			? `${Prefix}${Extract<K, string>}`
			: T[K] extends Primitive | Date
				? FormatWithPrefix<Extract<K, string>, Prefix>
				: T[K] extends Array<infer U>
					?
							| FormatWithPrefix<Extract<K, string>, Prefix>
							| JoinKeys<
									U,
									`${FormatWithPrefix<Extract<K, string>, Prefix>}[${NumberStr}]`
							  >
					: T[K] extends object
						?
								| FormatWithPrefix<Extract<K, string>, Prefix>
								| JoinKeys<T[K], FormatWithPrefix<Extract<K, string>, Prefix>>
						: FormatWithPrefix<Extract<K, string>, Prefix>;
}[keyof T];

export type OmitRootLevel<T> = T extends `${infer _1}.${infer _2}` ? T : never;

export type OnlyRootLevel<T> = T extends `${infer _1}.${infer _2}` ? never : T;

export type RecursiveDotNotation<
	T,
	Path extends string,
> = Path extends `['${infer Key}']${infer Rest}`
	? // Traverse brackets
		Key extends keyof T
		? Rest extends ""
			? T[Key]
			: Rest extends `['${string}']${string}`
				? RecursiveDotNotation<T[Key], Rest>
				: Rest extends `.${infer DotRest}`
					? RecursiveDotNotation<T[Key], DotRest>
					: never
		: never
	: // Traverse dot notation
		Path extends `${infer Key}.${infer Rest}`
		? //
			Key extends `${infer ArrayKey}[${string}]`
			? ArrayKey extends keyof T
				? T[ArrayKey] extends readonly (infer U)[]
					? RecursiveDotNotation<U, Rest>
					: never
				: never
			: Key extends keyof T
				? RecursiveDotNotation<T[Key], Rest>
				: never
		: // TODO: I'm pretty sure we can refactor this as both are quite similar
			Path extends `${infer ArrayKey}[${infer Rest}]`
			? ArrayKey extends keyof T
				? T[ArrayKey] extends readonly (infer U)[]
					? U
					: RecursiveDotNotation<T[ArrayKey], Rest>
				: never
			: Path extends keyof T
				? T[Path]
				: Path extends `'${infer Rest}'`
					? Rest extends keyof T
						? T[Rest]
						: never
					: never;

export type TypeOfField<
	Field extends string,
	Context extends Record<string, unknown>,
> = IsAny<Context> extends true ? any : RecursiveDotNotation<Context, Field>;

export type Last<T extends any[]> = T extends [...any[], infer _Last]
	? _Last
	: never;

// https://github.com/arktypeio/arktype/blob/91f1343ccef00becf81ba65d22aa161c8a29e8fb/ark/util/errors.ts#L44
/** "Hair Space" character, used  as a non-rendered sentinel for an error message string:
 *  https://www.compart.com/en/unicode/U+200A
 */
export const zeroWidthSpace = " ";

/** "Hair Space" character, used  as a non-rendered sentinel for an error message string:
 *  https://www.compart.com/en/unicode/U+200A
 */
export type ZeroWidthSpace = typeof zeroWidthSpace;

export type ErrorMessage<message extends string = string> =
	`${message}${ZeroWidthSpace}`;
// end
