// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VectorStoreInMemoryAINodeParameters } from "../nodes/VectorStoreInMemoryAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreInMemoryAIProps extends NodeProps, VectorStoreInMemoryAINodeParameters {


}

export class VectorStoreInMemoryAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreInMemory" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: VectorStoreInMemoryAIProps) {

        super(id, props);

    }

    override getParameters() : VectorStoreInMemoryAINodeParameters {

        return this.props ?? {};

    }


}
