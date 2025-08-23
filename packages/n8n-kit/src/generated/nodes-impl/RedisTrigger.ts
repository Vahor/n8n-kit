// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RedisCredentials } from "../credentials/Redis.ts";
import type { Credentials } from "../../credentials";
import type { RedisTriggerNodeParameters } from "../nodes/RedisTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface RedisTriggerProps extends NodeProps {
    readonly parameters: RedisTriggerNodeParameters;
    readonly redisCredentials: Credentials<RedisCredentials>;
}

/**
 * Subscribe to redis channel
 */
export class RedisTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.redisTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: RedisTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.redisCredentials];
    }

}
