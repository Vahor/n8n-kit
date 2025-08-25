// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ItemListsV2NodeParameters } from "../nodes/ItemListsV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface ItemListsV2Props extends NodeProps {
    readonly parameters: ItemListsV2NodeParameters;
}

/**
 * Helper for working with lists of items and transforming arrays
 */
export class ItemListsV2<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.itemLists" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: ItemListsV2Props) {
        super(id, props);
    }

}
