// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStoreInMemoryNodeParameters } from "../nodes/VectorStoreInMemory";
import { Node, type NodeProps } from "../../nodes/node";

export interface VectorStoreInMemoryProps extends NodeProps {
    readonly parameters: VectorStoreInMemoryNodeParameters;
}

/**
 * The easiest way to experiment with vector stores, without external setup.
 */
export class VectorStoreInMemory<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreInMemory" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: VectorStoreInMemoryProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

    public toCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type });
        return this;
    }

}
