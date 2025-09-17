// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { TextSplitterTokenSplitterNodeParameters } from "../nodes/TextSplitterTokenSplitter";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TextSplitterTokenSplitterProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TextSplitterTokenSplitterNodeParameters;
}

/**
 * Split text into chunks by tokens
 */
export class TextSplitterTokenSplitter<L extends string, C extends IContext = never, P extends TextSplitterTokenSplitterProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiTextSplitter(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_textSplitter" });
        return this;
    }

}
