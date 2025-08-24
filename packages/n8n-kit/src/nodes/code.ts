import type { Type } from "arktype";
import type { CodeNodeParameters } from "../generated/nodes/Code";
import { Code as _Code } from "../generated/nodes-impl/Code";
import type { IsNever } from "../utils/types";
import type { NodeProps } from "./node";

export interface CodeProps extends NodeProps {
	parameters: CodeNodeParameters;
	outputSchema?: Type;
}

export class Code<L extends string, P extends CodeProps> extends _Code<
	IsNever<P["outputSchema"]> extends true
		? never
		: NonNullable<P["outputSchema"]>["infer"],
	L
> {
	public constructor(
		id: L,
		override props: P,
	) {
		super(id, props);
	}
}
