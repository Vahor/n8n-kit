// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { AggregateNodeParameters } from "../nodes/Aggregate";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AggregateProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AggregateNodeParameters;
}

/**
 * Combine a field from many items into a list in a single item
 */
export class Aggregate<L extends string, C extends IContext = never, P extends AggregateProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.aggregate" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
