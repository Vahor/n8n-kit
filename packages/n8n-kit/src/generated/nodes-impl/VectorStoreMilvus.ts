// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MilvusApiCredentials } from "../credentials/MilvusApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreMilvusNodeParameters } from "../nodes/VectorStoreMilvus";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreMilvusProps extends NodeProps {

    readonly parameters: VectorStoreMilvusNodeParameters;
    readonly milvusApiCredentials: Credentials<MilvusApiCredentials>;

}

export class VectorStoreMilvus<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStoreMilvus" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: VectorStoreMilvusProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.milvusApiCredentials];

    }


}
