// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RedisCredentials } from "../credentials/Redis.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { MemoryRedisChatNodeParameters } from "../nodes/MemoryRedisChat";
import { Node, type NodeProps } from "../../nodes/node";

export interface MemoryRedisChatProps extends NodeProps {
    readonly parameters: MemoryRedisChatNodeParameters;
    readonly redisCredentials: Credentials<RedisCredentials>;
}

/**
 * Stores the chat history in Redis.
 */
export class MemoryRedisChat<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.memoryRedisChat" as const;
    protected typeVersion = 1.5 as const;

    constructor(id: L, override props: MemoryRedisChatProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.redisCredentials];
    }

    public toAiMemory(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_memory" });
        return this;
    }

}
