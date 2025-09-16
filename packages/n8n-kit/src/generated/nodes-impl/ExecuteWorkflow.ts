// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ExecuteWorkflowNodeParameters } from "../nodes/ExecuteWorkflow";
import { Node, type NodeProps } from "../../nodes/node";

export interface ExecuteWorkflowProps extends NodeProps {
    readonly parameters: ExecuteWorkflowNodeParameters;
}

/**
 * Execute another workflow
 */
export class ExecuteWorkflow<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.executeWorkflow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: ExecuteWorkflowProps) {
        super(id, props);
    }

}
