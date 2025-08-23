// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SmtpCredentials } from "../credentials/Smtp.ts";
import type { Credentials } from "../../credentials";
import type { EmailSendV2NodeParameters } from "../nodes/EmailSendV2";
import { Node, type NodeProps } from "../../nodes";

export interface EmailSendV2Props extends NodeProps, EmailSendV2NodeParameters {

    readonly smtpCredentials: Credentials<SmtpCredentials>;

}

export class EmailSendV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.emailSend" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, public readonly props: EmailSendV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<EmailSendV2NodeParameters, "smtpCredentials"> {

        const { smtpCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.smtpCredentials];

    }


}
