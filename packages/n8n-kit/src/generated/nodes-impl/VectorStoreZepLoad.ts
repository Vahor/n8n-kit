// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreZepLoadNodeParameters } from "../nodes/VectorStoreZepLoad";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreZepLoadProps extends NodeProps, VectorStoreZepLoadNodeParameters {

    readonly zepApiCredentials: Credentials<ZepApiCredentials>;

}

export class VectorStoreZepLoad<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreZepLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VectorStoreZepLoadProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreZepLoadNodeParameters, "zepApiCredentials"> {

        const { zepApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.zepApiCredentials];

    }


}
