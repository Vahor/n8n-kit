// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FtpCredentials } from "../credentials/Ftp.ts";
import type { SftpCredentials } from "../credentials/Sftp.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FtpNodeParameters } from "../nodes/Ftp";
import { Node, type NodeProps } from "../../nodes/node";

export interface FtpProps extends NodeProps {
    readonly parameters: FtpNodeParameters;
    readonly ftpCredentials?: Credentials<FtpCredentials>;
    readonly sftpCredentials?: Credentials<SftpCredentials>;
}

/**
 * Transfer files via FTP or SFTP
 */
export class Ftp<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.ftp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: FtpProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.ftpCredentials, this.props!.sftpCredentials];
    }

}
