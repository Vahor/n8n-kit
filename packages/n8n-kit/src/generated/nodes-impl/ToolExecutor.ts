// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { ToolExecutorNodeParameters } from "../nodes/ToolExecutor";
import { Node, type NodeProps } from "../../nodes/node";

export interface ToolExecutorProps extends NodeProps {
    readonly parameters: ToolExecutorNodeParameters;
}

/**
 * Node to execute tools without an AI Agent
 */
export class ToolExecutor<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.toolExecutor" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ToolExecutorProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withAiTool(next: State): this {
        super.addNext(next.startState, { type: "ai_tool", direction: "input" });
        return this;
    }

}
