// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailerLiteApiCredentials } from "../credentials/MailerLiteApi.ts";
import type { Credentials } from "../../credentials";
import type { MailerLiteTriggerV2NodeParameters } from "../nodes/MailerLiteTriggerV2";
import { Node, type NodeProps } from "../../nodes";

export interface MailerLiteTriggerV2Props extends NodeProps, MailerLiteTriggerV2NodeParameters {

    readonly mailerLiteApiCredentials: Credentials<MailerLiteApiCredentials>;

}

export class MailerLiteTriggerV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mailerLiteTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: MailerLiteTriggerV2Props) {

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

