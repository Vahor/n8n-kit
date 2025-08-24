// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { TextSplitterRecursiveCharacterTextSplitterNodeParameters } from "../nodes/TextSplitterRecursiveCharacterTextSplitter";
import { Node, type NodeProps } from "../../nodes/node";

export interface TextSplitterRecursiveCharacterTextSplitterProps extends NodeProps {
    readonly parameters: TextSplitterRecursiveCharacterTextSplitterNodeParameters;
}

/**
 * Split text into chunks by characters recursively, recommended for most use cases
 */
export class TextSplitterRecursiveCharacterTextSplitter<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: TextSplitterRecursiveCharacterTextSplitterProps) {
        super(id, props);
    }

    public toAiTextSplitter(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_textSplitter" });
        return this;
    }

}
