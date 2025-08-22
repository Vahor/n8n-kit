import type { NasaApiCredentials } from "generated/credentials/NasaApi";
import { type NasaNodeParameters, version } from "generated/nodes/Nasa";
import type { Credentials } from "../credentials";
import { Node, type NodeProps } from "./node";

interface NasaBaseProps extends NasaNodeParameters {}

export interface NasaProps extends NodeProps, NasaBaseProps {
	credentials: Credentials<NasaApiCredentials>;
}

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
		const { credentials: _, ...rest } = this.props;
		return rest;
	}

	public override getCredentials() {
		return this.props.credentials;
	}
}
