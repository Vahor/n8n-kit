// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailerLiteApiCredentials } from "../credentials/MailerLiteApi.ts";
import type { Credentials } from "../../credentials";
import type { MailerLiteV2NodeParameters } from "../nodes/MailerLiteV2";
import { Node, type NodeProps } from "../../nodes";

export interface MailerLiteV2Props extends NodeProps {

    readonly parameters: MailerLiteV2NodeParameters;
    readonly mailerLiteApiCredentials: Credentials<MailerLiteApiCredentials>;

}

export class MailerLiteV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mailerLite" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: MailerLiteV2Props) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.mailerLiteApiCredentials];

    }


}
