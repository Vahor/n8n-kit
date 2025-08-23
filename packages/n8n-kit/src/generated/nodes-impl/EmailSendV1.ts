// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SmtpCredentials } from "../credentials/Smtp.ts";
import type { Credentials } from "../../credentials";
import type { EmailSendV1NodeParameters } from "../nodes/EmailSendV1";
import { Node, type NodeProps } from "../../nodes";

export interface EmailSendV1Props extends NodeProps, EmailSendV1NodeParameters {

    readonly smtpCredentials: Credentials<SmtpCredentials>;

}

export class EmailSendV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.emailSend" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmailSendV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<EmailSendV1NodeParameters, "smtpCredentials"> {

        const { smtpCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.smtpCredentials];

    }


}
