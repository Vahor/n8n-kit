// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RedisCredentials } from "../credentials/Redis.ts";
import type { Credentials } from "../../credentials";
import type { RedisNodeParameters } from "../nodes/Redis";
import { Node, type NodeProps } from "../../nodes";

export interface RedisProps extends NodeProps, RedisNodeParameters {

    readonly redisCredentials: Credentials<RedisCredentials>;

}

export class Redis<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.redis" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: RedisProps) {

        super(id, props);

    }

    override getParameters() : Omit<RedisNodeParameters, "redisCredentials"> {

        const { redisCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.redisCredentials];

    }


}
