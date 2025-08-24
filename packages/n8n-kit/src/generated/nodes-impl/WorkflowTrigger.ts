// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { WorkflowTriggerNodeParameters } from "../nodes/WorkflowTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface WorkflowTriggerProps extends NodeProps {
    readonly parameters: WorkflowTriggerNodeParameters;
}

/**
 * Triggers based on various lifecycle events, like when a workflow is activated
 */
export class WorkflowTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.workflowTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: WorkflowTriggerProps) {
        super(id, props);
    }

}
