// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FlowApiCredentials } from "../credentials/FlowApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FlowNodeParameters } from "../nodes/Flow";
import { Node, type NodeProps } from "../../nodes/node";

export interface FlowProps extends NodeProps {
    readonly parameters: FlowNodeParameters;
    readonly flowApiCredentials: Credentials<FlowApiCredentials>;
}

/**
 * Consume Flow API
 */
export class Flow<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.flow" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FlowProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.flowApiCredentials];
    }

}
