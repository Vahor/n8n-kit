// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MongoDbCredentials } from "../credentials/MongoDb.ts";
import type { Credentials } from "../../credentials";
import type { MemoryMongoDbChatNodeParameters } from "../nodes/MemoryMongoDbChat";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryMongoDbChatProps extends NodeProps, MemoryMongoDbChatNodeParameters {

    readonly mongoDbCredentials: Credentials<MongoDbCredentials>;

}

export class MemoryMongoDbChat<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryMongoDbChat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MemoryMongoDbChatProps) {

        super(id, props);

    }

    override getParameters() : Omit<MemoryMongoDbChatNodeParameters, "mongoDbCredentials"> {

        const { mongoDbCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mongoDbCredentials];

    }


}
