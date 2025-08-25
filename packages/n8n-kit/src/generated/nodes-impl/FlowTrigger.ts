// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FlowApiCredentials } from "../credentials/FlowApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FlowTriggerNodeParameters } from "../nodes/FlowTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface FlowTriggerProps extends NodeProps {
    readonly parameters: FlowTriggerNodeParameters;
    readonly flowApiCredentials: Credentials<FlowApiCredentials>;
}

/**
 * Handle Flow events via webhooks
 */
export class FlowTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.flowTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FlowTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.flowApiCredentials];
    }

}
