// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ExecuteCommandNodeParameters } from "../nodes/ExecuteCommand";
import { Node, type NodeProps } from "../../nodes/node";

export interface ExecuteCommandProps extends NodeProps {
    readonly parameters: ExecuteCommandNodeParameters;
}

/**
 * Executes a command on the host
 */
export class ExecuteCommand<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.executeCommand" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ExecuteCommandProps) {
        super(id, props);
    }

}
