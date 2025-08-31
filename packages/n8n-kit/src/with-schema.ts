import type { Type } from "arktype";

/**
 * Output schema is only a TypeScript typedef used for compile-time typing.
 * It does NOT perform runtime validation.
 * Use `Code` nodes or `If` nodes if you need to enforce structure at runtime.`,
 */
export type OutputSchema<T extends Type> = T;
