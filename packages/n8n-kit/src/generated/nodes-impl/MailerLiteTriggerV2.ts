// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailerLiteApiCredentials } from "../credentials/MailerLiteApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailerLiteTriggerV2NodeParameters } from "../nodes/MailerLiteTriggerV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MailerLiteTriggerV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MailerLiteTriggerV2NodeParameters;
    readonly mailerLiteApiCredentials: Credentials<MailerLiteApiCredentials>;
}

/**
 * Starts the workflow when MailerLite events occur
 */
export class MailerLiteTriggerV2<L extends string, C extends IContext = never, P extends MailerLiteTriggerV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mailerLiteTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mailerLiteApiCredentials];
    }

}
