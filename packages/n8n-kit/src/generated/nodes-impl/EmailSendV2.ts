// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SmtpCredentials } from "../credentials/Smtp.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { EmailSendV2NodeParameters } from "../nodes/EmailSendV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmailSendV2Props extends NodeProps {
    readonly parameters: EmailSendV2NodeParameters;
    readonly smtpCredentials: Credentials<SmtpCredentials>;
}

/**
 * Sends an email using SMTP protocol
 */
export class EmailSendV2<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.emailSend" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props: EmailSendV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.smtpCredentials];
    }

}
