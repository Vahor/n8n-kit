// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStorePineconeNodeParameters } from "../nodes/VectorStorePinecone";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStorePineconeProps extends NodeProps {

    readonly parameters: VectorStorePineconeNodeParameters;
    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;

}

/**
 * undefined
 */
export class VectorStorePinecone<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStorePinecone" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: VectorStorePineconeProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.pineconeApiCredentials];

    }


}
