// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { AgentV2NodeParameters } from "../nodes/AgentV2";
import { Node, type NodeProps } from "../../nodes";

export interface AgentV2Props extends NodeProps {
    readonly parameters: AgentV2NodeParameters;
}

/**
 * Generates an action plan and executes it. Can use external tools.
 */
export class AgentV2<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.agent" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: AgentV2Props) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

}
