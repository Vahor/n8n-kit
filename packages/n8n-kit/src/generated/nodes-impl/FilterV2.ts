// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { FilterV2NodeParameters } from "../nodes/FilterV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface FilterV2Props extends NodeProps {
    readonly parameters: FilterV2NodeParameters;
}

/**
 * Remove items matching a condition
 */
export class FilterV2<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.filter" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: FilterV2Props) {
        super(id, props);
    }

}
