// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { AgentToolV2NodeParameters } from "../nodes/AgentToolV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface AgentToolV2Props extends NodeProps {
    readonly parameters: AgentToolV2NodeParameters;
}

/**
 * Generates an action plan and executes it. Can use external tools.
 */
export class AgentToolV2<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.agentTool" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: AgentToolV2Props) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
