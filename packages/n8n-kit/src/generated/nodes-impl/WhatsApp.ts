// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WhatsAppApiCredentials } from "../credentials/WhatsAppApi.ts";
import type { Credentials } from "../../credentials";
import type { WhatsAppNodeParameters } from "../nodes/WhatsApp";
import { Node, type NodeProps } from "../../nodes";

export interface WhatsAppProps extends NodeProps {

    readonly parameters: WhatsAppNodeParameters;
    readonly whatsAppApiCredentials: Credentials<WhatsAppApiCredentials>;

}

export class WhatsApp<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.whatsApp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WhatsAppProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.whatsAppApiCredentials];

    }


}
