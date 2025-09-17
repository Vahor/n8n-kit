// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolCodeNodeParameters } from "../nodes/ToolCode";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ToolCodeProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ToolCodeNodeParameters;
}

/**
 * Write a tool in JS or Python
 */
export class ToolCode<L extends string, C extends IContext = never, P extends ToolCodeProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.toolCode" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
