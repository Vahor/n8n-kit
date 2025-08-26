// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { MemoryChatRetrieverNodeParameters } from "../nodes/MemoryChatRetriever";
import { Node, type NodeProps } from "../../nodes/node";

export interface MemoryChatRetrieverProps extends NodeProps {
    readonly parameters: MemoryChatRetrieverNodeParameters;
}

/**
 * Retrieve chat messages from memory and use them in the workflow
 */
export class MemoryChatRetriever<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.memoryChatRetriever" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: MemoryChatRetrieverProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withMemory(next: State): this {
        super.addNext(next.startState, { type: "ai_memory", direction: "input" });
        return this;
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

}
