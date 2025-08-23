// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { ToolCalculatorNodeParameters } from "../nodes/ToolCalculator";
import { Node, type NodeProps } from "../../nodes";

export interface ToolCalculatorProps extends NodeProps {
    readonly parameters: ToolCalculatorNodeParameters;
}

/**
 * Make it easier for AI agents to perform arithmetic
 */
export class ToolCalculator<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.toolCalculator" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ToolCalculatorProps) {
        super(id, props);
    }

    public aiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
