// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { ChainRetrievalQaNodeParameters } from "../nodes/ChainRetrievalQa";
import { Node, type NodeProps } from "../../nodes/node";

export interface ChainRetrievalQaProps extends NodeProps {
    readonly parameters: ChainRetrievalQaNodeParameters;
}

/**
 * Answer questions about retrieved documents
 */
export class ChainRetrievalQa<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.chainRetrievalQa" as const;
    protected typeVersion = 1.6 as const;

    constructor(id: L, override props?: ChainRetrievalQaProps) {
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

}
