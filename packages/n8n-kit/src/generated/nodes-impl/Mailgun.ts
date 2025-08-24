// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailgunApiCredentials } from "../credentials/MailgunApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailgunNodeParameters } from "../nodes/Mailgun";
import { Node, type NodeProps } from "../../nodes/node";

export interface MailgunProps extends NodeProps {
    readonly parameters: MailgunNodeParameters;
    readonly mailgunApiCredentials: Credentials<MailgunApiCredentials>;
}

/**
 * Sends an email via Mailgun
 */
export class Mailgun<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.mailgun" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MailgunProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mailgunApiCredentials];
    }

}
