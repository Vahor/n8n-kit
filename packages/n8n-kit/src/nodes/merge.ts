import {
	type MergeV2NodeParameters,
	name,
	version,
} from "generated/nodes/MergeV2";
import { Node, type NodeProps } from "./node";

interface MergeBaseProps extends MergeV2NodeParameters {}

export interface MergeProps extends NodeProps, MergeBaseProps {}

export class Merge<L extends string> extends Node<L, {}> {
	protected override type = `n8n-nodes-base.${name}`;
	protected override typeVersion = version;

	constructor(
		id: L,
		public readonly props: MergeProps,
	) {
		super(id, props);
	}

	override getParameters() {
		return this.props;
	}
}
