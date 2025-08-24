// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { ChatAINodeParameters } from "../nodes/ChatAI";
import { Node, type NodeProps } from "../../nodes/node";

export interface ChatAIProps extends NodeProps {
    readonly parameters: ChatAINodeParameters;
}

/**
 * Send a message to a chat
 */
export class ChatAI<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.chat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ChatAIProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

}
