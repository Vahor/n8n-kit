// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailerLiteApiCredentials } from "../credentials/MailerLiteApi.ts";
import type { Credentials } from "../../credentials";
import type { MailerLiteV1NodeParameters } from "../nodes/MailerLiteV1";
import { Node, type NodeProps } from "../../nodes";

export interface MailerLiteV1Props extends NodeProps {

    readonly parameters: MailerLiteV1NodeParameters;
    readonly mailerLiteApiCredentials: Credentials<MailerLiteApiCredentials>;

}

/**
 * Consume Mailer Lite API
 */
export class MailerLiteV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mailerLite" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MailerLiteV1Props) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.mailerLiteApiCredentials];

    }


}
