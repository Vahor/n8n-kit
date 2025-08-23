// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailcheckApiCredentials } from "../credentials/MailcheckApi.ts";
import type { Credentials } from "../../credentials";
import type { MailcheckNodeParameters } from "../nodes/Mailcheck";
import { Node, type NodeProps } from "../../nodes";

export interface MailcheckProps extends NodeProps, MailcheckNodeParameters {

    readonly mailcheckApiCredentials: Credentials<MailcheckApiCredentials>;

}

export class Mailcheck<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mailcheck" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MailcheckProps) {

        super(id, props);

    }

    override getParameters() : Omit<MailcheckNodeParameters, "mailcheckApiCredentials"> {

        const { mailcheckApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mailcheckApiCredentials];

    }


}
