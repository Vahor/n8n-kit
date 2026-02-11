// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolThinkNodeParameters } from "../nodes/ToolThink";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ToolThinkProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ToolThinkNodeParameters;
}

/**
 * Invite the AI agent to do some thinking
 */
export class ToolThink<L extends string, C extends IContext = never, P extends ToolThinkProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.toolThink" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
