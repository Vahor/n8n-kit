// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreZepInsertNodeParameters } from "../nodes/VectorStoreZepInsert";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreZepInsertProps extends NodeProps {

    readonly parameters: VectorStoreZepInsertNodeParameters;
    readonly zepApiCredentials: Credentials<ZepApiCredentials>;

}

export class VectorStoreZepInsert<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStoreZepInsert" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VectorStoreZepInsertProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.zepApiCredentials];

    }


}
