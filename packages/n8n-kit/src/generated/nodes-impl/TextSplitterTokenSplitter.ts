// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { TextSplitterTokenSplitterNodeParameters } from "../nodes/TextSplitterTokenSplitter";
import { Node, type NodeProps } from "../../nodes/node";

export interface TextSplitterTokenSplitterProps extends NodeProps {
    readonly parameters: TextSplitterTokenSplitterNodeParameters;
}

/**
 * Split text into chunks by tokens
 */
export class TextSplitterTokenSplitter<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: TextSplitterTokenSplitterProps) {
        super(id, props);
    }

    public toAiTextSplitter(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_textSplitter" });
        return this;
    }

}
