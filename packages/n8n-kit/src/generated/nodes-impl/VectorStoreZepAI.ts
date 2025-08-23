// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreZepAINodeParameters } from "../nodes/VectorStoreZepAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreZepAIProps extends NodeProps, VectorStoreZepAINodeParameters {

    readonly zepApiCredentials: Credentials<ZepApiCredentials>;

}

export class VectorStoreZepAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreZep" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: VectorStoreZepAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreZepAINodeParameters, "zepApiCredentials"> {

        const { zepApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.zepApiCredentials];

    }


}

