import {
	type MergeV3NodeParameters,
	name,
	version,
} from "generated/nodes/MergeV3";
import { Node, type NodeProps } from "./node";

interface MergeBaseProps extends MergeV3NodeParameters {}

export interface MergeProps extends NodeProps, MergeBaseProps {}

export class Merge<L extends string> extends Node<L, {}> {
	protected override type = `n8n-nodes-base.${name}` as const;
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
