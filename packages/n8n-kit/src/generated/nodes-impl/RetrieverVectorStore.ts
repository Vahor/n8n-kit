// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RetrieverVectorStoreNodeParameters } from "../nodes/RetrieverVectorStore";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverVectorStoreProps extends NodeProps, RetrieverVectorStoreNodeParameters {


}

export class RetrieverVectorStore<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.retrieverVectorStore" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: RetrieverVectorStoreProps) {

        super(id, props);

    }

    override getParameters() : RetrieverVectorStoreNodeParameters {

        return this.props ?? {};

    }


}
