// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MilvusApiCredentials } from "../credentials/MilvusApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreMilvusAINodeParameters } from "../nodes/VectorStoreMilvusAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreMilvusAIProps extends NodeProps, VectorStoreMilvusAINodeParameters {

    readonly milvusApiCredentials: Credentials<MilvusApiCredentials>;

}

export class VectorStoreMilvusAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreMilvus" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: VectorStoreMilvusAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreMilvusAINodeParameters, "milvusApiCredentials"> {

        const { milvusApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.milvusApiCredentials];

    }


}

