// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WeaviateApiCredentials } from "../credentials/WeaviateApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreWeaviateNodeParameters } from "../nodes/VectorStoreWeaviate";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreWeaviateProps extends NodeProps {

    readonly parameters: VectorStoreWeaviateNodeParameters;
    readonly weaviateApiCredentials: Credentials<WeaviateApiCredentials>;

}

export class VectorStoreWeaviate<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStoreWeaviate" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: VectorStoreWeaviateProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.weaviateApiCredentials];

    }


}
