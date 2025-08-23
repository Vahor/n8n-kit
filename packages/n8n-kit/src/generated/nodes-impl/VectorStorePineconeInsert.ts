// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PineconeApiCredentials } from "../credentials/PineconeApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStorePineconeInsertNodeParameters } from "../nodes/VectorStorePineconeInsert";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStorePineconeInsertProps extends NodeProps {

    readonly parameters: VectorStorePineconeInsertNodeParameters;
    readonly pineconeApiCredentials: Credentials<PineconeApiCredentials>;

}

/**
 * undefined
 */
export class VectorStorePineconeInsert<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStorePineconeInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VectorStorePineconeInsertProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.pineconeApiCredentials];

    }


}
