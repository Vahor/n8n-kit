// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ItemListsV3NodeParameters } from "../nodes/ItemListsV3";
import { Node, type NodeProps } from "../../nodes/node";

export interface ItemListsV3Props extends NodeProps {
    readonly parameters: ItemListsV3NodeParameters;
}

/**
 * Helper for working with lists of items and transforming arrays
 */
export class ItemListsV3<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.itemLists" as const;
    protected typeVersion = 3.1 as const;

    constructor(id: L, override props?: ItemListsV3Props) {
        super(id, props);
    }

}
