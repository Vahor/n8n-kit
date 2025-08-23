// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SshPasswordCredentials } from "../credentials/SshPassword.ts";
import type { SshPrivateKeyCredentials } from "../credentials/SshPrivateKey.ts";
import type { Credentials } from "../../credentials";
import type { SshNodeParameters } from "../nodes/Ssh";
import { Node, type NodeProps } from "../../nodes";

export interface SshProps extends NodeProps {

    readonly parameters: SshNodeParameters;
    readonly sshPasswordCredentials?: Credentials<SshPasswordCredentials>;
    readonly sshPrivateKeyCredentials?: Credentials<SshPrivateKeyCredentials>;

}

export class Ssh<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.ssh" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: SshProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.sshPasswordCredentials, this.props!.sshPrivateKeyCredentials];

    }


}
