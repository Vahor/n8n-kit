// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CockpitApiCredentials } from "../credentials/CockpitApi.ts";
import type { Credentials } from "../../credentials";
import type { CockpitNodeParameters } from "../nodes/Cockpit";
import { Node, type NodeProps } from "../../nodes";

export interface CockpitProps extends NodeProps {

    readonly parameters: CockpitNodeParameters;
    readonly cockpitApiCredentials: Credentials<CockpitApiCredentials>;

}

/**
 * Consume Cockpit API
 */
export class Cockpit<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.cockpit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CockpitProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.cockpitApiCredentials];

    }


}
