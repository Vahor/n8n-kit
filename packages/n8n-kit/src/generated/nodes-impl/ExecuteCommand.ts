// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ExecuteCommandNodeParameters } from "../nodes/ExecuteCommand";
import { Node, type NodeProps } from "../../nodes/node";

export interface ExecuteCommandProps extends NodeProps {
    readonly parameters: ExecuteCommandNodeParameters;
}

/**
 * Executes a command on the host
 */
export class ExecuteCommand<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.executeCommand" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ExecuteCommandProps) {
        super(id, props);
    }

}
