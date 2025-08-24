// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DemioApiCredentials } from "../credentials/DemioApi.ts";
import type { Credentials } from "../../credentials";
import type { DemioNodeParameters } from "../nodes/Demio";
import { Node, type NodeProps } from "../../nodes/node";

export interface DemioProps extends NodeProps {
    readonly parameters: DemioNodeParameters;
    readonly demioApiCredentials: Credentials<DemioApiCredentials>;
}

/**
 * Consume the Demio API
 */
export class Demio<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.demio" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: DemioProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.demioApiCredentials];
    }

}
