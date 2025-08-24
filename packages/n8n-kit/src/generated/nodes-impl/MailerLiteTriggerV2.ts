// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailerLiteApiCredentials } from "../credentials/MailerLiteApi.ts";
import type { Credentials } from "../../credentials";
import type { MailerLiteTriggerV2NodeParameters } from "../nodes/MailerLiteTriggerV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface MailerLiteTriggerV2Props extends NodeProps {
    readonly parameters: MailerLiteTriggerV2NodeParameters;
    readonly mailerLiteApiCredentials: Credentials<MailerLiteApiCredentials>;
}

/**
 * Starts the workflow when MailerLite events occur
 */
export class MailerLiteTriggerV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.mailerLiteTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: MailerLiteTriggerV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mailerLiteApiCredentials];
    }

}
