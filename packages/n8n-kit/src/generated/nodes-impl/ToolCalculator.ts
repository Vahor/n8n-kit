// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolCalculatorNodeParameters } from "../nodes/ToolCalculator";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ToolCalculatorProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ToolCalculatorNodeParameters;
}

/**
 * Make it easier for AI agents to perform arithmetic
 */
export class ToolCalculator<L extends string, C extends IContext = never, P extends ToolCalculatorProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.toolCalculator" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
