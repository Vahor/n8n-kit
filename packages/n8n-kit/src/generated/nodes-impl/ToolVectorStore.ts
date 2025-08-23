// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolVectorStoreNodeParameters } from "../nodes/ToolVectorStore";
import { Node, type NodeProps } from "../../nodes";

export interface ToolVectorStoreProps extends NodeProps {

    readonly parameters: ToolVectorStoreNodeParameters;

}

/**
 * Answer questions with a vector store
 */
export class ToolVectorStore<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.toolVectorStore" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: ToolVectorStoreProps) {

        super(id, props);

    }


}
