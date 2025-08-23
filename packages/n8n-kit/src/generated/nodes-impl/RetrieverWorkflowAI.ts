// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RetrieverWorkflowAINodeParameters } from "../nodes/RetrieverWorkflowAI";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverWorkflowAIProps extends NodeProps, RetrieverWorkflowAINodeParameters {


}

export class RetrieverWorkflowAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.retrieverWorkflow" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: RetrieverWorkflowAIProps) {

        super(id, props);

    }

    override getParameters() : RetrieverWorkflowAINodeParameters {

        return this.props ?? {};

    }


}
