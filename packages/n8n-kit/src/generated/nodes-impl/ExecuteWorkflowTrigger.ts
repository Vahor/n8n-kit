// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ExecuteWorkflowTriggerNodeParameters } from "../nodes/ExecuteWorkflowTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ExecuteWorkflowTriggerProps extends NodeProps, ExecuteWorkflowTriggerNodeParameters {


}

export class ExecuteWorkflowTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.executeWorkflowTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: ExecuteWorkflowTriggerProps) {

        super(id, props);

    }

    override getParameters() : ExecuteWorkflowTriggerNodeParameters {

        return this.props ?? {};

    }


}

