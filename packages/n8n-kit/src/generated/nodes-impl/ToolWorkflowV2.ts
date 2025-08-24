// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolWorkflowV2NodeParameters } from "../nodes/ToolWorkflowV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface ToolWorkflowV2Props extends NodeProps {
    readonly parameters: ToolWorkflowV2NodeParameters;
}

/**
 * Uses another n8n workflow as a tool. Allows packaging any n8n node(s) as a tool.
 */
export class ToolWorkflowV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.toolWorkflow" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: ToolWorkflowV2Props) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
