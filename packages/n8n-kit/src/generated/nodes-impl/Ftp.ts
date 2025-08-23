// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FtpCredentials } from "../credentials/Ftp.ts";
import type { SftpCredentials } from "../credentials/Sftp.ts";
import type { Credentials } from "../../credentials";
import type { FtpNodeParameters } from "../nodes/Ftp";
import { Node, type NodeProps } from "../../nodes";

export interface FtpProps extends NodeProps, FtpNodeParameters {

    readonly ftpCredentials?: Credentials<FtpCredentials>;
    readonly sftpCredentials?: Credentials<SftpCredentials>;

}

export class Ftp<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.ftp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: FtpProps) {

        super(id, props);

    }

    override getParameters() : Omit<FtpNodeParameters, "ftpCredentials | sftpCredentials"> {

        const { ftpCredentials:_0, sftpCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.ftpCredentials, this.props.sftpCredentials];

    }


}
