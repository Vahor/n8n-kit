import { type CodeNodeParameters, name, version } from "generated/nodes/Code";
import { Node, type NodeProps } from "./node";

interface CodeBaseProps extends CodeNodeParameters {}

export interface CodeProps extends NodeProps, CodeBaseProps {}

export class Code<L extends string> extends Node<L, {}> {
	protected override type = `n8n-nodes-base.${name}`;
	protected override typeVersion = version;

	constructor(
		id: L,
		public readonly props: CodeProps,
	) {
		super(id, props);
	}

	override getParameters() {
		return this.props;
	}
}
