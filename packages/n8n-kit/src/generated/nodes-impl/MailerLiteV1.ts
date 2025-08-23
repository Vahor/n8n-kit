// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailerLiteApiCredentials } from "../credentials/MailerLiteApi.ts";
import type { Credentials } from "../../credentials";
import type { MailerLiteV1NodeParameters } from "../nodes/MailerLiteV1";
import { Node, type NodeProps } from "../../nodes";

export interface MailerLiteV1Props extends NodeProps, MailerLiteV1NodeParameters {

    readonly mailerLiteApiCredentials: Credentials<MailerLiteApiCredentials>;

}

export class MailerLiteV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mailerLite" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MailerLiteV1Props) {

        super(id, props);

    }

    override getParameters() {

        const { mailerLiteApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mailerLiteApiCredentials];

    }


}

