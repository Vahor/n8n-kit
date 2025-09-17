// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailjetEmailApiCredentials } from "../credentials/MailjetEmailApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailjetTriggerNodeParameters } from "../nodes/MailjetTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MailjetTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MailjetTriggerNodeParameters;
    readonly mailjetEmailApiCredentials: Credentials<MailjetEmailApiCredentials>;
}

/**
 * Handle Mailjet events via webhooks
 */
export class MailjetTrigger<L extends string, C extends IContext = never, P extends MailjetTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mailjetTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mailjetEmailApiCredentials];
    }

}
