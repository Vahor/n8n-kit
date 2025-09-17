// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { TextSplitterCharacterTextSplitterNodeParameters } from "../nodes/TextSplitterCharacterTextSplitter";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TextSplitterCharacterTextSplitterProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TextSplitterCharacterTextSplitterNodeParameters;
}

/**
 * Split text into chunks by characters
 */
export class TextSplitterCharacterTextSplitter<L extends string, C extends IContext = never, P extends TextSplitterCharacterTextSplitterProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiTextSplitter(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_textSplitter" });
        return this;
    }

}
