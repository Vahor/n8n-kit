// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WufooApiCredentials } from "../credentials/WufooApi.ts";
import type { Credentials } from "../../credentials";
import type { WufooTriggerNodeParameters } from "../nodes/WufooTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface WufooTriggerProps extends NodeProps {
    readonly parameters: WufooTriggerNodeParameters;
    readonly wufooApiCredentials: Credentials<WufooApiCredentials>;
}

/**
 * Handle Wufoo events via webhooks
 */
export class WufooTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.wufooTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WufooTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.wufooApiCredentials];
    }

}
