// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UProcApiCredentials } from "../credentials/UProcApi.ts";
import type { Credentials } from "../../credentials";
import type { UProcNodeParameters } from "../nodes/UProc";
import { Node, type NodeProps } from "../../nodes/node";

export interface UProcProps extends NodeProps {
    readonly parameters: UProcNodeParameters;
    readonly uprocApiCredentials: Credentials<UProcApiCredentials>;
}

/**
 * Consume uProc API
 */
export class UProc<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.uproc" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: UProcProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.uprocApiCredentials];
    }

}
