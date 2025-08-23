// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ExecuteWorkflowNodeParameters } from "../nodes/ExecuteWorkflow";
import { Node, type NodeProps } from "../../nodes";

export interface ExecuteWorkflowProps extends NodeProps {
    readonly parameters: ExecuteWorkflowNodeParameters;
}

/**
 * Execute another workflow
 */
export class ExecuteWorkflow<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.executeWorkflow" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props?: ExecuteWorkflowProps) {
        super(id, props);
    }

}
