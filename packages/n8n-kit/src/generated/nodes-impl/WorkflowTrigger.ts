// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WorkflowTriggerNodeParameters } from "../nodes/WorkflowTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface WorkflowTriggerProps extends NodeProps {

    readonly parameters: WorkflowTriggerNodeParameters;

}

/**
 * Triggers based on various lifecycle events, like when a workflow is activated
 */
export class WorkflowTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.workflowTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: WorkflowTriggerProps) {

        super(id, props);

    }


}
