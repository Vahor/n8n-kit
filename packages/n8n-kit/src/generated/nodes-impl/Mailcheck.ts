// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailcheckApiCredentials } from "../credentials/MailcheckApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailcheckNodeParameters } from "../nodes/Mailcheck";
import { Node, type NodeProps } from "../../nodes/node";

export interface MailcheckProps extends NodeProps {
    readonly parameters: MailcheckNodeParameters;
    readonly mailcheckApiCredentials: Credentials<MailcheckApiCredentials>;
}

/**
 * Consume Mailcheck API
 */
export class Mailcheck<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.mailcheck" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MailcheckProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mailcheckApiCredentials];
    }

}
