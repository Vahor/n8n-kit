// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ImapCredentials } from "../credentials/Imap.ts";
import type { Credentials } from "../../credentials";
import type { EmailReadImapV1NodeParameters } from "../nodes/EmailReadImapV1";
import { Node, type NodeProps } from "../../nodes";

export interface EmailReadImapV1Props extends NodeProps {

    readonly parameters: EmailReadImapV1NodeParameters;
    readonly imapCredentials: Credentials<ImapCredentials>;

}

/**
 * Triggers the workflow when a new email is received
 */
export class EmailReadImapV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.emailReadImap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmailReadImapV1Props) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.imapCredentials];

    }


}
