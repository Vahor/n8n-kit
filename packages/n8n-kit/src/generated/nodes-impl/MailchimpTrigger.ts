// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailchimpApiCredentials } from "../credentials/MailchimpApi.ts";
import type { MailchimpOAuth2ApiCredentials } from "../credentials/MailchimpOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailchimpTriggerNodeParameters } from "../nodes/MailchimpTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface MailchimpTriggerProps extends NodeProps {
    readonly parameters: MailchimpTriggerNodeParameters;
    readonly mailchimpApiCredentials?: Credentials<MailchimpApiCredentials>;
    readonly mailchimpOAuth2ApiCredentials?: Credentials<MailchimpOAuth2ApiCredentials>;
}

/**
 * Handle Mailchimp events via webhooks
 */
export class MailchimpTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.mailchimpTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: MailchimpTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mailchimpApiCredentials, this.props!.mailchimpOAuth2ApiCredentials];
    }

}
