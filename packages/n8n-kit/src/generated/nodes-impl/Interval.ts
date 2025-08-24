// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { IntervalNodeParameters } from "../nodes/Interval";
import { Node, type NodeProps } from "../../nodes/node";

export interface IntervalProps extends NodeProps {
    readonly parameters: IntervalNodeParameters;
}

/**
 * Triggers the workflow in a given interval
 */
export class Interval<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.interval" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: IntervalProps) {
        super(id, props);
    }

}
