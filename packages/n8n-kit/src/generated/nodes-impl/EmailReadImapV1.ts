// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ImapCredentials } from "../credentials/Imap.ts";
import type { Credentials } from "../../credentials";
import type { EmailReadImapV1NodeParameters } from "../nodes/EmailReadImapV1";
import { Node, type NodeProps } from "../../nodes";

export interface EmailReadImapV1Props extends NodeProps, EmailReadImapV1NodeParameters {

    readonly imapCredentials: Credentials<ImapCredentials>;

}

export class EmailReadImapV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.emailReadImap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmailReadImapV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<EmailReadImapV1NodeParameters, "imapCredentials"> {

        const { imapCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.imapCredentials];

    }


}
