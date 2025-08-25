// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WhatsAppTriggerApiCredentials } from "../credentials/WhatsAppTriggerApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WhatsAppTriggerNodeParameters } from "../nodes/WhatsAppTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface WhatsAppTriggerProps extends NodeProps {
    readonly parameters: WhatsAppTriggerNodeParameters;
    readonly whatsAppTriggerApiCredentials: Credentials<WhatsAppTriggerApiCredentials>;
}

/**
 * Handle WhatsApp events via webhooks
 */
export class WhatsAppTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.whatsAppTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WhatsAppTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.whatsAppTriggerApiCredentials];
    }

}
