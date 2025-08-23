// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { AgentToolV2NodeParameters } from "../nodes/AgentToolV2";
import { Node, type NodeProps } from "../../nodes";

export interface AgentToolV2Props extends NodeProps {
    readonly parameters: AgentToolV2NodeParameters;
}

/**
 * Generates an action plan and executes it. Can use external tools.
 */
export class AgentToolV2<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.agentTool" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: AgentToolV2Props) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
