// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailerLiteApiCredentials } from "../credentials/MailerLiteApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailerLiteV1NodeParameters } from "../nodes/MailerLiteV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MailerLiteV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MailerLiteV1NodeParameters;
    readonly mailerLiteApiCredentials: Credentials<MailerLiteApiCredentials>;
}

/**
 * Consume Mailer Lite API
 */
export class MailerLiteV1<L extends string, C extends IContext = never, P extends MailerLiteV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mailerLite" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mailerLiteApiCredentials];
    }

}
