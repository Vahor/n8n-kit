// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TextSplitterCharacterTextSplitterNodeParameters } from "../nodes/TextSplitterCharacterTextSplitter";
import { Node, type NodeProps } from "../../nodes";

export interface TextSplitterCharacterTextSplitterProps extends NodeProps, TextSplitterCharacterTextSplitterNodeParameters {


}

export class TextSplitterCharacterTextSplitter<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.textSplitterCharacterTextSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: TextSplitterCharacterTextSplitterProps) {

        super(id, props);

    }

    override getParameters() : TextSplitterCharacterTextSplitterNodeParameters {

        return this.props ?? {};

    }


}
