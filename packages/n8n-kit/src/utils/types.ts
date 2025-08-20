export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export type IsNever<T> = [T] extends [never] ? true : false;

export type IsRecord<T> = string extends keyof T ? true : false;
