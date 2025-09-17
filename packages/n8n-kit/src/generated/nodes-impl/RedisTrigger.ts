// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RedisCredentials } from "../credentials/Redis.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { RedisTriggerNodeParameters } from "../nodes/RedisTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RedisTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RedisTriggerNodeParameters;
    readonly redisCredentials: Credentials<RedisCredentials>;
}

/**
 * Subscribe to redis channel
 */
export class RedisTrigger<L extends string, C extends IContext = never, P extends RedisTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.redisTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.redisCredentials];
    }

}
