// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { ToolWikipediaNodeParameters } from "../nodes/ToolWikipedia";
import { Node, type NodeProps } from "../../nodes";

export interface ToolWikipediaProps extends NodeProps {
    readonly parameters: ToolWikipediaNodeParameters;
}

/**
 * Search in Wikipedia
 */
export class ToolWikipedia<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.toolWikipedia" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ToolWikipediaProps) {
        super(id, props);
    }

    public aiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
