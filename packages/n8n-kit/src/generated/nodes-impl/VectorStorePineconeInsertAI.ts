// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStorePineconeInsertAINodeParameters } from "../nodes/VectorStorePineconeInsertAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStorePineconeInsertAIProps extends NodeProps, VectorStorePineconeInsertAINodeParameters {

    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;

}

export class VectorStorePineconeInsertAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStorePineconeInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VectorStorePineconeInsertAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStorePineconeInsertAINodeParameters, "pineconeApiCredentials"> {

        const { pineconeApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.pineconeApiCredentials];

    }


}

