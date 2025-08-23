// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreZepLoadAINodeParameters } from "../nodes/VectorStoreZepLoadAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreZepLoadAIProps extends NodeProps, VectorStoreZepLoadAINodeParameters {

    readonly zepApiCredentials: Credentials<ZepApiCredentials>;

}

export class VectorStoreZepLoadAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreZepLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VectorStoreZepLoadAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreZepLoadAINodeParameters, "zepApiCredentials"> {

        const { zepApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.zepApiCredentials];

    }


}

