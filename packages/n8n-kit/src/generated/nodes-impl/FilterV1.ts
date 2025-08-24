// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FilterV1NodeParameters } from "../nodes/FilterV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface FilterV1Props extends NodeProps {
    readonly parameters: FilterV1NodeParameters;
}

/**
 * Remove items matching a condition
 */
export class FilterV1<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.filter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: FilterV1Props) {
        super(id, props);
    }

}
