// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ImapCredentials } from "../credentials/Imap.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { EmailReadImapV1NodeParameters } from "../nodes/EmailReadImapV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmailReadImapV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmailReadImapV1NodeParameters;
    readonly imapCredentials: Credentials<ImapCredentials>;
}

/**
 * Triggers the workflow when a new email is received
 */
export class EmailReadImapV1<L extends string, C extends IContext = never, P extends EmailReadImapV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.emailReadImap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.imapCredentials];
    }

}
