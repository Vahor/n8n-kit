// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RetrieverVectorStoreAINodeParameters } from "../nodes/RetrieverVectorStoreAI";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverVectorStoreAIProps extends NodeProps, RetrieverVectorStoreAINodeParameters {


}

export class RetrieverVectorStoreAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.retrieverVectorStore" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: RetrieverVectorStoreAIProps) {

        super(id, props);

    }

    override getParameters() : RetrieverVectorStoreAINodeParameters {

        return this.props ?? {};

    }


}

