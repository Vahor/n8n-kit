// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ExecuteWorkflowTriggerNodeParameters } from "../nodes/ExecuteWorkflowTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface ExecuteWorkflowTriggerProps extends NodeProps {
    readonly parameters: ExecuteWorkflowTriggerNodeParameters;
}

/**
 * Helpers for calling other n8n workflows. Used for designing modular, microservice-like workflows.
 */
export class ExecuteWorkflowTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.executeWorkflowTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: ExecuteWorkflowTriggerProps) {
        super(id, props);
    }

}
