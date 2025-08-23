// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreZepLoadNodeParameters } from "../nodes/VectorStoreZepLoad";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreZepLoadProps extends NodeProps {

    readonly parameters: VectorStoreZepLoadNodeParameters;
    readonly zepApiCredentials: Credentials<ZepApiCredentials>;

}

/**
 * Load data from Zep Vector Store index
 */
export class VectorStoreZepLoad<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStoreZepLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VectorStoreZepLoadProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.zepApiCredentials];

    }


}
