// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStorePineconeLoadAINodeParameters } from "../nodes/VectorStorePineconeLoadAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStorePineconeLoadAIProps extends NodeProps, VectorStorePineconeLoadAINodeParameters {

    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;

}

export class VectorStorePineconeLoadAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStorePineconeLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VectorStorePineconeLoadAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStorePineconeLoadAINodeParameters, "pineconeApiCredentials"> {

        const { pineconeApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.pineconeApiCredentials];

    }


}

