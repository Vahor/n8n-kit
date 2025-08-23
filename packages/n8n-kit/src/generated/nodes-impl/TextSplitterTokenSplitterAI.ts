// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TextSplitterTokenSplitterAINodeParameters } from "../nodes/TextSplitterTokenSplitterAI";
import { Node, type NodeProps } from "../../nodes";

export interface TextSplitterTokenSplitterAIProps extends NodeProps, TextSplitterTokenSplitterAINodeParameters {


}

export class TextSplitterTokenSplitterAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.textSplitterTokenSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: TextSplitterTokenSplitterAIProps) {

        super(id, props);

    }

    override getParameters() : TextSplitterTokenSplitterAINodeParameters {

        return this.props ?? {};

    }


}
