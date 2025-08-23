// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TextSplitterRecursiveCharacterTextSplitterNodeParameters } from "../nodes/TextSplitterRecursiveCharacterTextSplitter";
import { Node, type NodeProps } from "../../nodes";

export interface TextSplitterRecursiveCharacterTextSplitterProps extends NodeProps, TextSplitterRecursiveCharacterTextSplitterNodeParameters {


}

export class TextSplitterRecursiveCharacterTextSplitter<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.textSplitterRecursiveCharacterTextSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: TextSplitterRecursiveCharacterTextSplitterProps) {

        super(id, props);

    }

    override getParameters() : TextSplitterRecursiveCharacterTextSplitterNodeParameters {

        return this.props ?? {};

    }


}
