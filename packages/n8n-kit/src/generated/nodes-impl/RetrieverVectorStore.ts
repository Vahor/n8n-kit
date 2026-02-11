// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { RetrieverVectorStoreNodeParameters } from "../nodes/RetrieverVectorStore";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RetrieverVectorStoreProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RetrieverVectorStoreNodeParameters;
}

/**
 * Use a Vector Store as Retriever
 */
export class RetrieverVectorStore<L extends string, C extends IContext = never, P extends RetrieverVectorStoreProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.retrieverVectorStore" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withVectorStore(next: State): this {
        super.addNext(next.startState, { type: "ai_vectorStore", direction: "input" });
        return this;
    }

    public toAiRetriever(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_retriever" });
        return this;
    }

}
