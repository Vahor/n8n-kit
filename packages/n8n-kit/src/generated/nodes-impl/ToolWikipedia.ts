// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolWikipediaNodeParameters } from "../nodes/ToolWikipedia";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ToolWikipediaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ToolWikipediaNodeParameters;
}

/**
 * Search in Wikipedia
 */
export class ToolWikipedia<L extends string, C extends IContext = never, P extends ToolWikipediaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.toolWikipedia" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
