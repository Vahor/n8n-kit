// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ItemListsV1NodeParameters } from "../nodes/ItemListsV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface ItemListsV1Props extends NodeProps {
    readonly parameters: ItemListsV1NodeParameters;
}

/**
 * Helper for working with lists of items and transforming arrays
 */
export class ItemListsV1<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.itemLists" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ItemListsV1Props) {
        super(id, props);
    }

}
