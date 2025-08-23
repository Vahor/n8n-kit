// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WhatsAppTriggerApiCredentials } from "../credentials/WhatsAppTriggerApi.ts";
import type { Credentials } from "../../credentials";
import type { WhatsAppTriggerNodeParameters } from "../nodes/WhatsAppTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface WhatsAppTriggerProps extends NodeProps, WhatsAppTriggerNodeParameters {

    readonly whatsAppTriggerApiCredentials: Credentials<WhatsAppTriggerApiCredentials>;

}

export class WhatsAppTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.whatsAppTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: WhatsAppTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<WhatsAppTriggerNodeParameters, "whatsAppTriggerApiCredentials"> {

        const { whatsAppTriggerApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.whatsAppTriggerApiCredentials];

    }


}
