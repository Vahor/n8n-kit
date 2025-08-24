// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailchimpApiCredentials } from "../credentials/MailchimpApi.ts";
import type { MailchimpOAuth2ApiCredentials } from "../credentials/MailchimpOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailchimpNodeParameters } from "../nodes/Mailchimp";
import { Node, type NodeProps } from "../../nodes/node";

export interface MailchimpProps extends NodeProps {
    readonly parameters: MailchimpNodeParameters;
    readonly mailchimpApiCredentials?: Credentials<MailchimpApiCredentials>;
    readonly mailchimpOAuth2ApiCredentials?: Credentials<MailchimpOAuth2ApiCredentials>;
}

/**
 * Consume Mailchimp API
 */
export class Mailchimp<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.mailchimp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: MailchimpProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mailchimpApiCredentials, this.props!.mailchimpOAuth2ApiCredentials];
    }

}
