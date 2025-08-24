// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolThinkNodeParameters } from "../nodes/ToolThink";
import { Node, type NodeProps } from "../../nodes/node";

export interface ToolThinkProps extends NodeProps {
    readonly parameters: ToolThinkNodeParameters;
}

/**
 * Invite the AI agent to do some thinking
 */
export class ToolThink<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.toolThink" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: ToolThinkProps) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
