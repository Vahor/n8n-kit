// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MongoDbCredentials } from "../credentials/MongoDb.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreMongoDBAtlasNodeParameters } from "../nodes/VectorStoreMongoDBAtlas";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreMongoDBAtlasProps extends NodeProps {

    readonly parameters: VectorStoreMongoDBAtlasNodeParameters;
    readonly mongoDbCredentials: Credentials<MongoDbCredentials>;

}

export class VectorStoreMongoDBAtlas<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: VectorStoreMongoDBAtlasProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.mongoDbCredentials];

    }


}
