// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailerLiteApiCredentials } from "../credentials/MailerLiteApi.ts";
import type { Credentials } from "../../credentials";
import type { MailerLiteTriggerV1NodeParameters } from "../nodes/MailerLiteTriggerV1";
import { Node, type NodeProps } from "../../nodes";

export interface MailerLiteTriggerV1Props extends NodeProps {
    readonly parameters: MailerLiteTriggerV1NodeParameters;
    readonly mailerLiteApiCredentials: Credentials<MailerLiteApiCredentials>;
}

/**
 * Starts the workflow when MailerLite events occur
 */
export class MailerLiteTriggerV1<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.mailerLiteTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MailerLiteTriggerV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mailerLiteApiCredentials];
    }

}
