// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SendGridApiCredentials } from "../credentials/SendGridApi.ts";
import type { Credentials } from "../../credentials";
import type { SendGridNodeParameters } from "../nodes/SendGrid";
import { Node, type NodeProps } from "../../nodes/node";

export interface SendGridProps extends NodeProps {
    readonly parameters: SendGridNodeParameters;
    readonly sendGridApiCredentials: Credentials<SendGridApiCredentials>;
}

/**
 * Consume SendGrid API
 */
export class SendGrid<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.sendGrid" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SendGridProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.sendGridApiCredentials];
    }

}
