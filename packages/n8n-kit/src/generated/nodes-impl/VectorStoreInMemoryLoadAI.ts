// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VectorStoreInMemoryLoadAINodeParameters } from "../nodes/VectorStoreInMemoryLoadAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreInMemoryLoadAIProps extends NodeProps, VectorStoreInMemoryLoadAINodeParameters {


}

export class VectorStoreInMemoryLoadAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreInMemoryLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: VectorStoreInMemoryLoadAIProps) {

        super(id, props);

    }

    override getParameters() : VectorStoreInMemoryLoadAINodeParameters {

        return this.props ?? {};

    }


}

