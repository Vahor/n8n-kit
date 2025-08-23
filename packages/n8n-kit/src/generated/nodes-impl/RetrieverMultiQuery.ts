// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { RetrieverMultiQueryNodeParameters } from "../nodes/RetrieverMultiQuery";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverMultiQueryProps extends NodeProps {
    readonly parameters: RetrieverMultiQueryNodeParameters;
}

/**
 * Automates prompt tuning, generates diverse queries and expands document pool for enhanced retrieval.
 */
export class RetrieverMultiQuery<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.retrieverMultiQuery" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: RetrieverMultiQueryProps) {
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
