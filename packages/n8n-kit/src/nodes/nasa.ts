import { type, version } from "../generated/nodes/Nasa";
import type { NasaProps } from "../generated/nodes-impl/Nasa";
import { Node } from "./node";

export class Nasa<L extends string, P extends NasaProps> extends Node<
	L,
	P["parameters"]["resource"] extends "donkiSolarFlare"
		? { classType: string }
		: { __TODO: string }
> {
	protected override type = type;
	protected override typeVersion = version;

	constructor(
		id: L,
		override props: P,
	) {
		super(id, props);
	}

	public override getCredentials() {
		return [this.props.nasaApiCredentials];
	}
}
