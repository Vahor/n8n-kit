// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MongoDbCredentials } from "../credentials/MongoDb.ts";
import type { Credentials } from "../../credentials";
import type { MemoryMongoDbChatNodeParameters } from "../nodes/MemoryMongoDbChat";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryMongoDbChatProps extends NodeProps {

    readonly parameters: MemoryMongoDbChatNodeParameters;
    readonly mongoDbCredentials: Credentials<MongoDbCredentials>;

}

/**
 * Stores the chat history in MongoDB collection.
 */
export class MemoryMongoDbChat<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.memoryMongoDbChat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MemoryMongoDbChatProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.mongoDbCredentials];

    }


}
