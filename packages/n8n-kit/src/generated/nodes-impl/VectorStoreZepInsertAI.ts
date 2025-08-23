// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreZepInsertAINodeParameters } from "../nodes/VectorStoreZepInsertAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreZepInsertAIProps extends NodeProps, VectorStoreZepInsertAINodeParameters {

    readonly zepApiCredentials: Credentials<ZepApiCredentials>;

}

export class VectorStoreZepInsertAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreZepInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VectorStoreZepInsertAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreZepInsertAINodeParameters, "zepApiCredentials"> {

        const { zepApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.zepApiCredentials];

    }


}
