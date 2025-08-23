// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RetrieverWorkflowNodeParameters } from "../nodes/RetrieverWorkflow";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverWorkflowProps extends NodeProps, RetrieverWorkflowNodeParameters {


}

export class RetrieverWorkflow<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.retrieverWorkflow" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: RetrieverWorkflowProps) {

        super(id, props);

    }

    override getParameters() : RetrieverWorkflowNodeParameters {

        return this.props ?? {};

    }


}
