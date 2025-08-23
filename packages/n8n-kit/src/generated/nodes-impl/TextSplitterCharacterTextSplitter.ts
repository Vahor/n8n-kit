// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TextSplitterCharacterTextSplitterNodeParameters } from "../nodes/TextSplitterCharacterTextSplitter";
import { Node, type NodeProps } from "../../nodes";

export interface TextSplitterCharacterTextSplitterProps extends NodeProps {

    readonly parameters: TextSplitterCharacterTextSplitterNodeParameters;

}

export class TextSplitterCharacterTextSplitter<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: TextSplitterCharacterTextSplitterProps) {

        super(id, props);

    }


}
