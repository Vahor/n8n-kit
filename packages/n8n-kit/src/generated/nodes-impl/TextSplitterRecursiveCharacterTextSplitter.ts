// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TextSplitterRecursiveCharacterTextSplitterNodeParameters } from "../nodes/TextSplitterRecursiveCharacterTextSplitter";
import { Node, type NodeProps } from "../../nodes";

export interface TextSplitterRecursiveCharacterTextSplitterProps extends NodeProps {

    readonly parameters: TextSplitterRecursiveCharacterTextSplitterNodeParameters;

}

/**
 * Split text into chunks by characters recursively, recommended for most use cases
 */
export class TextSplitterRecursiveCharacterTextSplitter<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: TextSplitterRecursiveCharacterTextSplitterProps) {

        super(id, props);

    }


}
