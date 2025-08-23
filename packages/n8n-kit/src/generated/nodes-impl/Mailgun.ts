// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailgunApiCredentials } from "../credentials/MailgunApi.ts";
import type { Credentials } from "../../credentials";
import type { MailgunNodeParameters } from "../nodes/Mailgun";
import { Node, type NodeProps } from "../../nodes";

export interface MailgunProps extends NodeProps, MailgunNodeParameters {

    readonly mailgunApiCredentials: Credentials<MailgunApiCredentials>;

}

export class Mailgun<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mailgun" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MailgunProps) {

        super(id, props);

    }

    override getParameters() : Omit<MailgunNodeParameters, "mailgunApiCredentials"> {

        const { mailgunApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mailgunApiCredentials];

    }


}
