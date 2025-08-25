// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SmtpCredentials } from "../credentials/Smtp.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { EmailSendV1NodeParameters } from "../nodes/EmailSendV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmailSendV1Props extends NodeProps {
    readonly parameters: EmailSendV1NodeParameters;
    readonly smtpCredentials: Credentials<SmtpCredentials>;
}

/**
 * Sends an Email
 */
export class EmailSendV1<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.emailSend" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmailSendV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.smtpCredentials];
    }

}
