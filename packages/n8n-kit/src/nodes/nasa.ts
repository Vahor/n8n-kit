import { type NasaNodeParameters, version } from "generated/nodes/Nasa";
import { Node, type NodeProps } from "./node";

interface NasaBaseProps extends NasaNodeParameters {}

export interface NasaProps extends NodeProps, NasaBaseProps {}

export class Nasa<L extends string> extends Node<
	L,
	{
		classType: string;
	}
> {
	protected override type = "n8n-nodes-base.nasa";
	protected override typeVersion = version;

	constructor(
		id: L,
		public readonly props: NasaProps,
	) {
		super(id, props);
	}

	override getParameters() {
		return this.props;
	}
}
