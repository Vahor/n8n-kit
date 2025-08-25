// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WhatsAppApiCredentials } from "../credentials/WhatsAppApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WhatsAppNodeParameters } from "../nodes/WhatsApp";
import { Node, type NodeProps } from "../../nodes/node";

export interface WhatsAppProps extends NodeProps {
    readonly parameters: WhatsAppNodeParameters;
    readonly whatsAppApiCredentials: Credentials<WhatsAppApiCredentials>;
}

/**
 * Access WhatsApp API
 */
export class WhatsApp<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.whatsApp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WhatsAppProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.whatsAppApiCredentials];
    }

}
