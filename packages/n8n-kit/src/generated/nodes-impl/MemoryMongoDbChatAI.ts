// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MongoDbCredentials } from "../credentials/MongoDb.ts";
import type { Credentials } from "../../credentials";
import type { MemoryMongoDbChatAINodeParameters } from "../nodes/MemoryMongoDbChatAI";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryMongoDbChatAIProps extends NodeProps, MemoryMongoDbChatAINodeParameters {

    readonly mongoDbCredentials: Credentials<MongoDbCredentials>;

}

export class MemoryMongoDbChatAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryMongoDbChat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MemoryMongoDbChatAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<MemoryMongoDbChatAINodeParameters, "mongoDbCredentials"> {

        const { mongoDbCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mongoDbCredentials];

    }


}
