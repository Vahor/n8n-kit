// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VectorStoreInMemoryInsertNodeParameters } from "../nodes/VectorStoreInMemoryInsert";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreInMemoryInsertProps extends NodeProps {

    readonly parameters: VectorStoreInMemoryInsertNodeParameters;

}

/**
 * Insert data into an in-memory vector store
 */
export class VectorStoreInMemoryInsert<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStoreInMemoryInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: VectorStoreInMemoryInsertProps) {

        super(id, props);

    }


}
