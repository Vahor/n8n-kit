// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WeaviateApiCredentials } from "../credentials/WeaviateApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreWeaviateNodeParameters } from "../nodes/VectorStoreWeaviate";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreWeaviateProps extends NodeProps, VectorStoreWeaviateNodeParameters {

    readonly weaviateApiCredentials: Credentials<WeaviateApiCredentials>;

}

export class VectorStoreWeaviate<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreWeaviate" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: VectorStoreWeaviateProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreWeaviateNodeParameters, "weaviateApiCredentials"> {

        const { weaviateApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.weaviateApiCredentials];

    }


}
