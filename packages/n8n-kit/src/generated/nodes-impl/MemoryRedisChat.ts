// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RedisCredentials } from "../credentials/Redis.ts";
import type { Credentials } from "../../credentials";
import type { MemoryRedisChatNodeParameters } from "../nodes/MemoryRedisChat";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryRedisChatProps extends NodeProps, MemoryRedisChatNodeParameters {

    readonly redisCredentials: Credentials<RedisCredentials>;

}

export class MemoryRedisChat<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryRedisChat" as const;
    protected typeVersion = 1.5 as const;

    constructor(id: L, public readonly props: MemoryRedisChatProps) {

        super(id, props);

    }

    override getParameters() : Omit<MemoryRedisChatNodeParameters, "redisCredentials"> {

        const { redisCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.redisCredentials];

    }


}
