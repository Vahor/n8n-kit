// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStoreInMemoryLoadNodeParameters } from "../nodes/VectorStoreInMemoryLoad";
import { Node, type NodeProps } from "../../nodes/node";

export interface VectorStoreInMemoryLoadProps extends NodeProps {
    readonly parameters: VectorStoreInMemoryLoadNodeParameters;
}

/**
 * Load embedded data from an in-memory vector store
 */
export class VectorStoreInMemoryLoad<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreInMemoryLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: VectorStoreInMemoryLoadProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withEmbedding(next: State): this {
        super.addNext(next.startState, { type: "ai_embedding", direction: "input" });
        return this;
    }

    public toAiVectorStore(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_vectorStore" });
        return this;
    }

}
