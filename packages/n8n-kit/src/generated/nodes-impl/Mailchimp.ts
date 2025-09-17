// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailchimpApiCredentials } from "../credentials/MailchimpApi.ts";
import type { MailchimpOAuth2ApiCredentials } from "../credentials/MailchimpOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailchimpNodeParameters } from "../nodes/Mailchimp";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MailchimpProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MailchimpNodeParameters;
    readonly mailchimpApiCredentials?: Credentials<MailchimpApiCredentials>;
    readonly mailchimpOAuth2ApiCredentials?: Credentials<MailchimpOAuth2ApiCredentials>;
}

/**
 * Consume Mailchimp API
 */
export class Mailchimp<L extends string, C extends IContext = never, P extends MailchimpProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mailchimp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.mailchimpApiCredentials, this.props?.mailchimpOAuth2ApiCredentials];
    }

}
