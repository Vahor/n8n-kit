// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TextSplitterCharacterTextSplitterAINodeParameters } from "../nodes/TextSplitterCharacterTextSplitterAI";
import { Node, type NodeProps } from "../../nodes";

export interface TextSplitterCharacterTextSplitterAIProps extends NodeProps, TextSplitterCharacterTextSplitterAINodeParameters {


}

export class TextSplitterCharacterTextSplitterAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.textSplitterCharacterTextSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: TextSplitterCharacterTextSplitterAIProps) {

        super(id, props);

    }

    override getParameters() : TextSplitterCharacterTextSplitterAINodeParameters {

        return this.props ?? {};

    }


}
