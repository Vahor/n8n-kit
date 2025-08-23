// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreZepNodeParameters } from "../nodes/VectorStoreZep";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreZepProps extends NodeProps {
    readonly parameters: VectorStoreZepNodeParameters;
    readonly zepApiCredentials: Credentials<ZepApiCredentials>;
}

/**
 * Work with your data in Zep Vector Store
 */
export class VectorStoreZep<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreZep" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: VectorStoreZepProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.zepApiCredentials];
    }

}
