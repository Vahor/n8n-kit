// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailcheckApiCredentials } from "../credentials/MailcheckApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailcheckNodeParameters } from "../nodes/Mailcheck";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MailcheckProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MailcheckNodeParameters;
    readonly mailcheckApiCredentials: Credentials<MailcheckApiCredentials>;
}

/**
 * Consume Mailcheck API
 */
export class Mailcheck<L extends string, C extends IContext = never, P extends MailcheckProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mailcheck" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mailcheckApiCredentials];
    }

}
