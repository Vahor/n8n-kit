// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ImapCredentials } from "../credentials/Imap.ts";
import type { Credentials } from "../../credentials";
import type { EmailReadImapV2NodeParameters } from "../nodes/EmailReadImapV2";
import { Node, type NodeProps } from "../../nodes";

export interface EmailReadImapV2Props extends NodeProps {

    readonly parameters: EmailReadImapV2NodeParameters;
    readonly imapCredentials: Credentials<ImapCredentials>;

}

export class EmailReadImapV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.emailReadImap" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props: EmailReadImapV2Props) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.imapCredentials];

    }


}
