// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MilvusApiCredentials } from "../credentials/MilvusApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreMilvusNodeParameters } from "../nodes/VectorStoreMilvus";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreMilvusProps extends NodeProps, VectorStoreMilvusNodeParameters {

    readonly milvusApiCredentials: Credentials<MilvusApiCredentials>;

}

export class VectorStoreMilvus<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreMilvus" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: VectorStoreMilvusProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreMilvusNodeParameters, "milvusApiCredentials"> {

        const { milvusApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.milvusApiCredentials];

    }


}
