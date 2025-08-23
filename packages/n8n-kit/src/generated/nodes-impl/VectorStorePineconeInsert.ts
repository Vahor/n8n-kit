// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStorePineconeInsertNodeParameters } from "../nodes/VectorStorePineconeInsert";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStorePineconeInsertProps extends NodeProps, VectorStorePineconeInsertNodeParameters {

    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;

}

export class VectorStorePineconeInsert<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStorePineconeInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VectorStorePineconeInsertProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStorePineconeInsertNodeParameters, "pineconeApiCredentials"> {

        const { pineconeApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.pineconeApiCredentials];

    }


}
