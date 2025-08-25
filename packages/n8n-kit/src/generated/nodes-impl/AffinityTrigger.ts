// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AffinityApiCredentials } from "../credentials/AffinityApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AffinityTriggerNodeParameters } from "../nodes/AffinityTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface AffinityTriggerProps extends NodeProps {
    readonly parameters: AffinityTriggerNodeParameters;
    readonly affinityApiCredentials: Credentials<AffinityApiCredentials>;
}

/**
 * Handle Affinity events via webhooks
 */
export class AffinityTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.affinityTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AffinityTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.affinityApiCredentials];
    }

}
