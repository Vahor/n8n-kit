// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CortexApiCredentials } from "../credentials/CortexApi.ts";
import type { Credentials } from "../../credentials";
import type { CortexNodeParameters } from "../nodes/Cortex";
import { Node, type NodeProps } from "../../nodes/node";

export interface CortexProps extends NodeProps {
    readonly parameters: CortexNodeParameters;
    readonly cortexApiCredentials: Credentials<CortexApiCredentials>;
}

/**
 * Apply the Cortex analyzer/responder on the given entity
 */
export class Cortex<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.cortex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CortexProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.cortexApiCredentials];
    }

}
