// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStorePineconeLoadNodeParameters } from "../nodes/VectorStorePineconeLoad";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStorePineconeLoadProps extends NodeProps {

    readonly parameters: VectorStorePineconeLoadNodeParameters;
    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;

}

/**
 * undefined
 */
export class VectorStorePineconeLoad<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStorePineconeLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VectorStorePineconeLoadProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.pineconeApiCredentials];

    }


}
