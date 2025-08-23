// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QdrantApiCredentials } from "../credentials/QdrantApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreQdrantAINodeParameters } from "../nodes/VectorStoreQdrantAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreQdrantAIProps extends NodeProps, VectorStoreQdrantAINodeParameters {

    readonly qdrantApiCredentials: Credentials<QdrantApiCredentials>;

}

export class VectorStoreQdrantAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreQdrant" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: VectorStoreQdrantAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreQdrantAINodeParameters, "qdrantApiCredentials"> {

        const { qdrantApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.qdrantApiCredentials];

    }


}

