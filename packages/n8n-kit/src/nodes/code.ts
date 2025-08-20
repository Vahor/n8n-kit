import type { Type } from "arktype";
import { type CodeNodeParameters, name, version } from "generated/nodes/Code";
import type { IsNever } from "../utils/types";
import { Node, type NodeProps } from "./node";

interface CodeBaseProps extends CodeNodeParameters {}

export interface CodeProps extends NodeProps, CodeBaseProps {
	outputSchema?: Type;
}

export class Code<L extends string, P extends CodeProps> extends Node<
	L,
	IsNever<P["outputSchema"]> extends true
		? never
		: NonNullable<P["outputSchema"]>["infer"]
> {
	protected override type = `n8n-nodes-base.${name}`;
	protected override typeVersion = version;

	public constructor(
		id: L,
		public readonly props: P,
	) {
		super(id, props);
	}

	override getParameters() {
		return this.props;
	}
}
