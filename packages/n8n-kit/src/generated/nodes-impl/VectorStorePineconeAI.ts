// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStorePineconeAINodeParameters } from "../nodes/VectorStorePineconeAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStorePineconeAIProps extends NodeProps, VectorStorePineconeAINodeParameters {

    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;

}

export class VectorStorePineconeAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStorePinecone" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: VectorStorePineconeAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStorePineconeAINodeParameters, "pineconeApiCredentials"> {

        const { pineconeApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.pineconeApiCredentials];

    }


}

