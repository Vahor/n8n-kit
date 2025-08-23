// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { MemoryChatRetrieverNodeParameters } from "../nodes/MemoryChatRetriever";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryChatRetrieverProps extends NodeProps {
    readonly parameters: MemoryChatRetrieverNodeParameters;
}

/**
 * Retrieve chat messages from memory and use them in the workflow
 */
export class MemoryChatRetriever<L extends string> extends Node<L> {
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

}
