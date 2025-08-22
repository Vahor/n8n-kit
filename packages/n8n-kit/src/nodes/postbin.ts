import {
	name,
	type PostBinNodeParameters,
	version,
} from "generated/nodes/PostBin";
import { Node, type NodeProps } from "./node";

interface PostBinBaseProps extends PostBinNodeParameters {}

export interface PostBinProps extends NodeProps, PostBinBaseProps {}

export class PostBin<L extends string> extends Node<L, {}> {
	protected override type = `n8n-nodes-base.${name}` as const;
	protected override typeVersion = version;

	constructor(
		id: L,
		public readonly props: PostBinProps,
	) {
		super(id, props);
	}

	override getParameters() {
		return this.props;
	}
}
