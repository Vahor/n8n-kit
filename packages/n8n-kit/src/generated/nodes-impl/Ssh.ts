// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SshPasswordCredentials } from "../credentials/SshPassword.ts";
import type { SshPrivateKeyCredentials } from "../credentials/SshPrivateKey.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SshNodeParameters } from "../nodes/Ssh";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SshProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SshNodeParameters;
    readonly sshPasswordCredentials?: Credentials<SshPasswordCredentials>;
    readonly sshPrivateKeyCredentials?: Credentials<SshPrivateKeyCredentials>;
}

/**
 * Execute commands via SSH
 */
export class Ssh<L extends string, C extends IContext = never, P extends SshProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.ssh" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.sshPasswordCredentials, this.props?.sshPrivateKeyCredentials];
    }

}
