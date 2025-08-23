// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CockpitApiCredentials } from "../credentials/CockpitApi.ts";
import type { Credentials } from "../../credentials";
import type { CockpitNodeParameters } from "../nodes/Cockpit";
import { Node, type NodeProps } from "../../nodes";

export interface CockpitProps extends NodeProps, CockpitNodeParameters {

    readonly cockpitApiCredentials: Credentials<CockpitApiCredentials>;

}

export class Cockpit<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.cockpit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: CockpitProps) {

        super(id, props);

    }

    override getParameters() : Omit<CockpitNodeParameters, "cockpitApiCredentials"> {

        const { cockpitApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.cockpitApiCredentials];

    }


}
