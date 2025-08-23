// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { ToolWorkflowV1NodeParameters } from "../nodes/ToolWorkflowV1";
import { Node, type NodeProps } from "../../nodes";

export interface ToolWorkflowV1Props extends NodeProps {
    readonly parameters: ToolWorkflowV1NodeParameters;
}

/**
 * Uses another n8n workflow as a tool. Allows packaging any n8n node(s) as a tool.
 */
export class ToolWorkflowV1<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.toolWorkflow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: ToolWorkflowV1Props) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
