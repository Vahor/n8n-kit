// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MonicaCrmApiCredentials } from "../credentials/MonicaCrmApi.ts";
import type { Credentials } from "../../credentials";
import type { MonicaCrmNodeParameters } from "../nodes/MonicaCrm";
import { Node, type NodeProps } from "../../nodes/node";

export interface MonicaCrmProps extends NodeProps {
    readonly parameters: MonicaCrmNodeParameters;
    readonly monicaCrmApiCredentials: Credentials<MonicaCrmApiCredentials>;
}

/**
 * Consume the Monica CRM API
 */
export class MonicaCrm<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.monicaCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MonicaCrmProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.monicaCrmApiCredentials];
    }

}
