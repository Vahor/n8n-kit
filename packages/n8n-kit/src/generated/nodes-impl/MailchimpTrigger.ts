// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailchimpApiCredentials } from "../credentials/MailchimpApi.ts";
import type { MailchimpOAuth2ApiCredentials } from "../credentials/MailchimpOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MailchimpTriggerNodeParameters } from "../nodes/MailchimpTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface MailchimpTriggerProps extends NodeProps, MailchimpTriggerNodeParameters {

    readonly mailchimpApiCredentials?: Credentials<MailchimpApiCredentials>;
    readonly mailchimpOAuth2ApiCredentials?: Credentials<MailchimpOAuth2ApiCredentials>;

}

export class MailchimpTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mailchimpTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MailchimpTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<MailchimpTriggerNodeParameters, "mailchimpApiCredentials | mailchimpOAuth2ApiCredentials"> {

        const { mailchimpApiCredentials:_0, mailchimpOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mailchimpApiCredentials, this.props.mailchimpOAuth2ApiCredentials];

    }


}

