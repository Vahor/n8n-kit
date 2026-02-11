// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { RetrieverWorkflowNodeParameters } from "../nodes/RetrieverWorkflow";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RetrieverWorkflowProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RetrieverWorkflowNodeParameters;
}

/**
 * Use an n8n Workflow as Retriever
 */
export class RetrieverWorkflow<L extends string, C extends IContext = never, P extends RetrieverWorkflowProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.retrieverWorkflow" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toRetriever(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_retriever" });
        return this;
    }

}
