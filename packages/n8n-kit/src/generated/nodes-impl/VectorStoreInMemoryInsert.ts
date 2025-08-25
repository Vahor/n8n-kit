// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStoreInMemoryInsertNodeParameters } from "../nodes/VectorStoreInMemoryInsert";
import { Node, type NodeProps } from "../../nodes/node";

export interface VectorStoreInMemoryInsertProps extends NodeProps {
    readonly parameters: VectorStoreInMemoryInsertNodeParameters;
}

/**
 * Insert data into an in-memory vector store
 */
export class VectorStoreInMemoryInsert<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreInMemoryInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: VectorStoreInMemoryInsertProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withDocument(next: State): this {
        super.addNext(next.startState, { type: "ai_document", direction: "input" });
        return this;
    }

    public withEmbedding(next: State): this {
        super.addNext(next.startState, { type: "ai_embedding", direction: "input" });
        return this;
    }

}
