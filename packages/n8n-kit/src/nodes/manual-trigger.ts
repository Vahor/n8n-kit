import {
	type ManualTriggerNodeParameters,
	name,
	version,
} from "generated/nodes/ManualTrigger";
import { Node, type NodeProps } from "./node";

interface ManualTriggerBaseProps extends ManualTriggerNodeParameters {}

export interface ManualTriggerProps extends NodeProps, ManualTriggerBaseProps {}

export class ManualTrigger<L extends string> extends Node<L, {}> {
	protected override type = `n8n-nodes-base.${name}`;
	protected override typeVersion = version;

	constructor(
		id: L,
		public readonly props?: ManualTriggerProps,
	) {
		super(id, props);
	}

	override getParameters() {
		return this.props ?? {};
	}
}
