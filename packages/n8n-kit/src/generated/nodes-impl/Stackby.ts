// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StackbyApiCredentials } from "../credentials/StackbyApi.ts";
import type { Credentials } from "../../credentials";
import type { StackbyNodeParameters } from "../nodes/Stackby";
import { Node, type NodeProps } from "../../nodes";

export interface StackbyProps extends NodeProps {
    readonly parameters: StackbyNodeParameters;
    readonly stackbyApiCredentials: Credentials<StackbyApiCredentials>;
}

/**
 * Read, write, and delete data in Stackby
 */
export class Stackby<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.stackby" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: StackbyProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.stackbyApiCredentials];
    }

}
