// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VectorStoreInMemoryLoadNodeParameters } from "../nodes/VectorStoreInMemoryLoad";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreInMemoryLoadProps extends NodeProps {

    readonly parameters: VectorStoreInMemoryLoadNodeParameters;

}

export class VectorStoreInMemoryLoad<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStoreInMemoryLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: VectorStoreInMemoryLoadProps) {

        super(id, props);

    }


}
