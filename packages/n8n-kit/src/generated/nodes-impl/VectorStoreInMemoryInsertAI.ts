// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VectorStoreInMemoryInsertAINodeParameters } from "../nodes/VectorStoreInMemoryInsertAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreInMemoryInsertAIProps extends NodeProps, VectorStoreInMemoryInsertAINodeParameters {


}

export class VectorStoreInMemoryInsertAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreInMemoryInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: VectorStoreInMemoryInsertAIProps) {

        super(id, props);

    }

    override getParameters() : VectorStoreInMemoryInsertAINodeParameters {

        return this.props ?? {};

    }


}

