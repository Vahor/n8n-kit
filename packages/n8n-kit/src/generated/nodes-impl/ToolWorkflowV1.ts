// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolWorkflowV1NodeParameters } from "../nodes/ToolWorkflowV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ToolWorkflowV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ToolWorkflowV1NodeParameters;
}

/**
 * Uses another n8n workflow as a tool. Allows packaging any n8n node(s) as a tool.
 */
export class ToolWorkflowV1<L extends string, C extends IContext = never, P extends ToolWorkflowV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.toolWorkflow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
