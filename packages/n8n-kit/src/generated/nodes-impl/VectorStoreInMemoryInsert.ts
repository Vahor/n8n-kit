// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VectorStoreInMemoryInsertNodeParameters } from "../nodes/VectorStoreInMemoryInsert";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreInMemoryInsertProps extends NodeProps, VectorStoreInMemoryInsertNodeParameters {


}

export class VectorStoreInMemoryInsert<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreInMemoryInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: VectorStoreInMemoryInsertProps) {

        super(id, props);

    }

    override getParameters() : VectorStoreInMemoryInsertNodeParameters {

        return this.props ?? {};

    }


}
