// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailerLiteApiCredentials } from "../credentials/MailerLiteApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailerLiteTriggerV1NodeParameters } from "../nodes/MailerLiteTriggerV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MailerLiteTriggerV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MailerLiteTriggerV1NodeParameters;
    readonly mailerLiteApiCredentials: Credentials<MailerLiteApiCredentials>;
}

/**
 * Starts the workflow when MailerLite events occur
 */
export class MailerLiteTriggerV1<L extends string, C extends IContext = never, P extends MailerLiteTriggerV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mailerLiteTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mailerLiteApiCredentials];
    }

}
