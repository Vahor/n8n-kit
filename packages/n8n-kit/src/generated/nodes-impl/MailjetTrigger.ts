// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailjetEmailApiCredentials } from "../credentials/MailjetEmailApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailjetTriggerNodeParameters } from "../nodes/MailjetTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface MailjetTriggerProps extends NodeProps {
    readonly parameters: MailjetTriggerNodeParameters;
    readonly mailjetEmailApiCredentials: Credentials<MailjetEmailApiCredentials>;
}

/**
 * Handle Mailjet events via webhooks
 */
export class MailjetTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.mailjetTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MailjetTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mailjetEmailApiCredentials];
    }

}
