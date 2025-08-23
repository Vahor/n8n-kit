import { version } from "../generated/nodes/Nasa";
import type { NasaProps } from "../generated/nodes-impl/Nasa";
import { Node } from "./node";

export class Nasa<L extends string, P extends NasaProps> extends Node<
	L,
	P["resource"] extends "donkiSolarFlare"
		? { classType: string }
		: { __TODO: string }
> {
	protected override type = "n8n-nodes-base.nasa" as const;
	protected override typeVersion = version;

	constructor(
		id: L,
		public readonly props: P,
	) {
		super(id, props);
	}

	override getParameters() {
		const { nasaApiCredentials: _, ...rest } = this.props;
		return rest;
	}

	public override getCredentials() {
		return [this.props.nasaApiCredentials];
	}
}
