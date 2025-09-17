// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SmtpCredentials } from "../credentials/Smtp.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { EmailSendV2NodeParameters } from "../nodes/EmailSendV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmailSendV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmailSendV2NodeParameters;
    readonly smtpCredentials: Credentials<SmtpCredentials>;
}

/**
 * Sends an email using SMTP protocol
 */
export class EmailSendV2<L extends string, C extends IContext = never, P extends EmailSendV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.emailSend" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.smtpCredentials];
    }

}
