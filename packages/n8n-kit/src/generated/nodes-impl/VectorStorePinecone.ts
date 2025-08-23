// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStorePineconeNodeParameters } from "../nodes/VectorStorePinecone";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStorePineconeProps extends NodeProps, VectorStorePineconeNodeParameters {

    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;

}

export class VectorStorePinecone<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStorePinecone" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: VectorStorePineconeProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStorePineconeNodeParameters, "pineconeApiCredentials"> {

        const { pineconeApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.pineconeApiCredentials];

    }


}
