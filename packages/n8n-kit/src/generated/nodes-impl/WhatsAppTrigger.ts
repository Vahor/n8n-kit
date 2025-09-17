// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WhatsAppTriggerApiCredentials } from "../credentials/WhatsAppTriggerApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WhatsAppTriggerNodeParameters } from "../nodes/WhatsAppTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WhatsAppTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WhatsAppTriggerNodeParameters;
    readonly whatsAppTriggerApiCredentials: Credentials<WhatsAppTriggerApiCredentials>;
}

/**
 * Handle WhatsApp events via webhooks
 */
export class WhatsAppTrigger<L extends string, C extends IContext = never, P extends WhatsAppTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.whatsAppTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.whatsAppTriggerApiCredentials];
    }

}
