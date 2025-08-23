// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RedisCredentials } from "../credentials/Redis.ts";
import type { Credentials } from "../../credentials";
import type { MemoryRedisChatAINodeParameters } from "../nodes/MemoryRedisChatAI";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryRedisChatAIProps extends NodeProps, MemoryRedisChatAINodeParameters {

    readonly redisCredentials: Credentials<RedisCredentials>;

}

export class MemoryRedisChatAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryRedisChat" as const;
    protected typeVersion = 1.5 as const;

    constructor(id: L, public readonly props: MemoryRedisChatAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<MemoryRedisChatAINodeParameters, "redisCredentials"> {

        const { redisCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.redisCredentials];

    }


}

