// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QdrantApiCredentials } from "../credentials/QdrantApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreQdrantNodeParameters } from "../nodes/VectorStoreQdrant";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreQdrantProps extends NodeProps {
    readonly parameters: VectorStoreQdrantNodeParameters;
    readonly qdrantApiCredentials: Credentials<QdrantApiCredentials>;
}

/**
 * Work with your data in a Qdrant collection
 */
export class VectorStoreQdrant<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreQdrant" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: VectorStoreQdrantProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.qdrantApiCredentials];
    }

}
