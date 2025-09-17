// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IterableApiCredentials } from "../credentials/IterableApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { IterableNodeParameters } from "../nodes/Iterable";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface IterableProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: IterableNodeParameters;
    readonly iterableApiCredentials: Credentials<IterableApiCredentials>;
}

/**
 * Consume Iterable API
 */
export class Iterable<L extends string, C extends IContext = never, P extends IterableProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.iterable" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.iterableApiCredentials];
    }

}
