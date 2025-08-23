// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { RetrieverContextualCompressionNodeParameters } from "../nodes/RetrieverContextualCompression";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverContextualCompressionProps extends NodeProps {
    readonly parameters: RetrieverContextualCompressionNodeParameters;
}

/**
 * Enhances document similarity search by contextual compression.
 */
export class RetrieverContextualCompression<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.retrieverContextualCompression" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: RetrieverContextualCompressionProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withModel(next: State): this {
        super.addNext(next.startState, { type: "ai_languageModel", direction: "input" });
        return this;
    }

    public withRetriever(next: State): this {
        super.addNext(next.startState, { type: "ai_retriever", direction: "input" });
        return this;
    }

    public retriever(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_retriever" });
        return this;
    }

}
