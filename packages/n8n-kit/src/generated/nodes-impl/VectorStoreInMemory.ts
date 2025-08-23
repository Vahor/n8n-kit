// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VectorStoreInMemoryNodeParameters } from "../nodes/VectorStoreInMemory";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreInMemoryProps extends NodeProps, VectorStoreInMemoryNodeParameters {


}

export class VectorStoreInMemory<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreInMemory" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: VectorStoreInMemoryProps) {

        super(id, props);

    }

    override getParameters() : VectorStoreInMemoryNodeParameters {

        return this.props ?? {};

    }


}
