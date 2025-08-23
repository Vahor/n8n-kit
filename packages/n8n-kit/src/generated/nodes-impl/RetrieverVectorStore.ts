// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RetrieverVectorStoreNodeParameters } from "../nodes/RetrieverVectorStore";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverVectorStoreProps extends NodeProps {

    readonly parameters: RetrieverVectorStoreNodeParameters;

}

export class RetrieverVectorStore<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.retrieverVectorStore" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: RetrieverVectorStoreProps) {

        super(id, props);

    }


}
