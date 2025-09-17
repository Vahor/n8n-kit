// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailgunApiCredentials } from "../credentials/MailgunApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailgunNodeParameters } from "../nodes/Mailgun";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MailgunProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MailgunNodeParameters;
    readonly mailgunApiCredentials: Credentials<MailgunApiCredentials>;
}

/**
 * Sends an email via Mailgun
 */
export class Mailgun<L extends string, C extends IContext = never, P extends MailgunProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mailgun" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mailgunApiCredentials];
    }

}
