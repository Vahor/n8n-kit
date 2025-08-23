// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MongoDbCredentials } from "../credentials/MongoDb.ts";
import type { Credentials } from "../../credentials";
import type { VectorStoreMongoDBAtlasAINodeParameters } from "../nodes/VectorStoreMongoDBAtlasAI";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStoreMongoDBAtlasAIProps extends NodeProps, VectorStoreMongoDBAtlasAINodeParameters {

    readonly mongoDbCredentials: Credentials<MongoDbCredentials>;

}

export class VectorStoreMongoDBAtlasAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vectorStoreMongoDBAtlas" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: VectorStoreMongoDBAtlasAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<VectorStoreMongoDBAtlasAINodeParameters, "mongoDbCredentials"> {

        const { mongoDbCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mongoDbCredentials];

    }


}

