// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MonicaCrmApiCredentials } from "../credentials/MonicaCrmApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MonicaCrmNodeParameters } from "../nodes/MonicaCrm";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MonicaCrmProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MonicaCrmNodeParameters;
    readonly monicaCrmApiCredentials: Credentials<MonicaCrmApiCredentials>;
}

/**
 * Consume the Monica CRM API
 */
export class MonicaCrm<L extends string, C extends IContext = never, P extends MonicaCrmProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.monicaCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.monicaCrmApiCredentials];
    }

}
