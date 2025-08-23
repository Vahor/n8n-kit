// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UprocApiCredentials } from "../credentials/UProcApi.ts";
import type { Credentials } from "../../credentials";
import type { UProcNodeParameters } from "../nodes/UProc";
import { Node, type NodeProps } from "../../nodes";

export interface UProcProps extends NodeProps, UProcNodeParameters {

    readonly uprocApiCredentials: Credentials<UprocApiCredentials>;

}

export class UProc<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.uproc" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: UProcProps) {

        super(id, props);

    }

    override getParameters() {

        const { uprocApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.uprocApiCredentials];

    }


}

