// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FtpCredentials } from "../credentials/Ftp.ts";
import type { SftpCredentials } from "../credentials/Sftp.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FtpNodeParameters } from "../nodes/Ftp";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FtpProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FtpNodeParameters;
    readonly ftpCredentials?: Credentials<FtpCredentials>;
    readonly sftpCredentials?: Credentials<SftpCredentials>;
}

/**
 * Transfer files via FTP or SFTP
 */
export class Ftp<L extends string, C extends IContext = never, P extends FtpProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.ftp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.ftpCredentials, this.props?.sftpCredentials];
    }

}
