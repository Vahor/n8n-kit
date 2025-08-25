// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IterableApiCredentials } from "../credentials/IterableApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { IterableNodeParameters } from "../nodes/Iterable";
import { Node, type NodeProps } from "../../nodes/node";

export interface IterableProps extends NodeProps {
    readonly parameters: IterableNodeParameters;
    readonly iterableApiCredentials: Credentials<IterableApiCredentials>;
}

/**
 * Consume Iterable API
 */
export class Iterable<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.iterable" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: IterableProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.iterableApiCredentials];
    }

}
