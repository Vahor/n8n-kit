// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RedisCredentials } from "../credentials/Redis.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { RedisNodeParameters } from "../nodes/Redis";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RedisProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RedisNodeParameters;
    readonly redisCredentials: Credentials<RedisCredentials>;
}

/**
 * Get, send and update data in Redis
 */
export class Redis<L extends string, C extends IContext = never, P extends RedisProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.redis" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.redisCredentials];
    }

}
