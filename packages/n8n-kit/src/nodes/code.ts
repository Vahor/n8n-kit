import type { Type } from "arktype";
import {
	type CodeNodeParameters,
	type,
	version,
} from "../generated/nodes/Code";
import type { IsNever } from "../utils/types";
import { Node, type NodeProps } from "./node";

export interface CodeProps extends NodeProps {
	parameters: CodeNodeParameters;
	outputSchema?: Type;
}

export class Code<L extends string, P extends CodeProps> extends Node<
	L,
	IsNever<P["outputSchema"]> extends true
		? never
		: NonNullable<P["outputSchema"]>["infer"]
> {
	protected override type = type;
	protected override typeVersion = version;

	public constructor(
		id: L,
		override props: P,
	) {
		super(id, props);
	}
}
