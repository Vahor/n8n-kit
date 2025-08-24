// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ImapCredentials } from "../credentials/Imap.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { EmailReadImapV2NodeParameters } from "../nodes/EmailReadImapV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmailReadImapV2Props extends NodeProps {
    readonly parameters: EmailReadImapV2NodeParameters;
    readonly imapCredentials: Credentials<ImapCredentials>;
}

/**
 * Triggers the workflow when a new email is received
 */
export class EmailReadImapV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.emailReadImap" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props: EmailReadImapV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.imapCredentials];
    }

}
