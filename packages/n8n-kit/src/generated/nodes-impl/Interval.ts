// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { IntervalNodeParameters } from "../nodes/Interval";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface IntervalProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: IntervalNodeParameters;
}

/**
 * Triggers the workflow in a given interval
 */
export class Interval<L extends string, C extends IContext = never, P extends IntervalProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.interval" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
