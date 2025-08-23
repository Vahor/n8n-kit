// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChargebeeApiCredentials } from "../credentials/ChargebeeApi.ts";
import type { Credentials } from "../../credentials";
import type { ChargebeeNodeParameters } from "../nodes/Chargebee";
import { Node, type NodeProps } from "../../nodes";

export interface ChargebeeProps extends NodeProps {
    readonly parameters: ChargebeeNodeParameters;
    readonly chargebeeApiCredentials: Credentials<ChargebeeApiCredentials>;
}

/**
 * Retrieve data from Chargebee API
 */
export class Chargebee<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.chargebee" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ChargebeeProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.chargebeeApiCredentials];
    }

}
