// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TextSplitterRecursiveCharacterTextSplitterAINodeParameters } from "../nodes/TextSplitterRecursiveCharacterTextSplitterAI";
import { Node, type NodeProps } from "../../nodes";

export interface TextSplitterRecursiveCharacterTextSplitterAIProps extends NodeProps, TextSplitterRecursiveCharacterTextSplitterAINodeParameters {


}

export class TextSplitterRecursiveCharacterTextSplitterAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.textSplitterRecursiveCharacterTextSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: TextSplitterRecursiveCharacterTextSplitterAIProps) {

        super(id, props);

    }

    override getParameters() : TextSplitterRecursiveCharacterTextSplitterAINodeParameters {

        return this.props ?? {};

    }


}

