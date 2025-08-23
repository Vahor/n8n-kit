// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { RetrieverWorkflowNodeParameters } from "../nodes/RetrieverWorkflow";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverWorkflowProps extends NodeProps {
    readonly parameters: RetrieverWorkflowNodeParameters;
}

/**
 * Use an n8n Workflow as Retriever
 */
export class RetrieverWorkflow<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.retrieverWorkflow" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: RetrieverWorkflowProps) {
        super(id, props);
    }

    public toRetriever(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_retriever" });
        return this;
    }

}
