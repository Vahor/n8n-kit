// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DhlApiCredentials } from "../credentials/DhlApi.ts";
import type { Credentials } from "../../credentials";
import type { DhlNodeParameters } from "../nodes/Dhl";
import { Node, type NodeProps } from "../../nodes/node";

export interface DhlProps extends NodeProps {
    readonly parameters: DhlNodeParameters;
    readonly dhlApiCredentials: Credentials<DhlApiCredentials>;
}

/**
 * Consume DHL API
 */
export class Dhl<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.dhl" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: DhlProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.dhlApiCredentials];
    }

}
