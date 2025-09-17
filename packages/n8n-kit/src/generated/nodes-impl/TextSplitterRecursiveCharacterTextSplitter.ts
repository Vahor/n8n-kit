// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { TextSplitterRecursiveCharacterTextSplitterNodeParameters } from "../nodes/TextSplitterRecursiveCharacterTextSplitter";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TextSplitterRecursiveCharacterTextSplitterProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TextSplitterRecursiveCharacterTextSplitterNodeParameters;
}

/**
 * Split text into chunks by characters recursively, recommended for most use cases
 */
export class TextSplitterRecursiveCharacterTextSplitter<L extends string, C extends IContext = never, P extends TextSplitterRecursiveCharacterTextSplitterProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiTextSplitter(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_textSplitter" });
        return this;
    }

}
