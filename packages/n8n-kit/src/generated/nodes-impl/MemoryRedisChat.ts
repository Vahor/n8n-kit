// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RedisCredentials } from "../credentials/Redis.ts";
import type { Credentials } from "../../credentials";
import type { MemoryRedisChatNodeParameters } from "../nodes/MemoryRedisChat";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryRedisChatProps extends NodeProps {

    readonly parameters: MemoryRedisChatNodeParameters;
    readonly redisCredentials: Credentials<RedisCredentials>;

}

/**
 * Stores the chat history in Redis.
 */
export class MemoryRedisChat<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.memoryRedisChat" as const;
    protected typeVersion = 1.5 as const;

    constructor(id: L, override props: MemoryRedisChatProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.redisCredentials];

    }


}
