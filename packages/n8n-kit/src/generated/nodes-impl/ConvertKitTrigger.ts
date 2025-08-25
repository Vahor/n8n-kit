// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ConvertKitApiCredentials } from "../credentials/ConvertKitApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ConvertKitTriggerNodeParameters } from "../nodes/ConvertKitTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface ConvertKitTriggerProps extends NodeProps {
    readonly parameters: ConvertKitTriggerNodeParameters;
    readonly convertKitApiCredentials: Credentials<ConvertKitApiCredentials>;
}

/**
 * Handle ConvertKit events via webhooks
 */
export class ConvertKitTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.convertKitTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ConvertKitTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.convertKitApiCredentials];
    }

}
