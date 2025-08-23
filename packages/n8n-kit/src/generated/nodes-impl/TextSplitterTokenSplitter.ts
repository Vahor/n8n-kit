// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TextSplitterTokenSplitterNodeParameters } from "../nodes/TextSplitterTokenSplitter";
import { Node, type NodeProps } from "../../nodes";

export interface TextSplitterTokenSplitterProps extends NodeProps, TextSplitterTokenSplitterNodeParameters {


}

export class TextSplitterTokenSplitter<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.textSplitterTokenSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: TextSplitterTokenSplitterProps) {

        super(id, props);

    }

    override getParameters() : TextSplitterTokenSplitterNodeParameters {

        return this.props ?? {};

    }


}
