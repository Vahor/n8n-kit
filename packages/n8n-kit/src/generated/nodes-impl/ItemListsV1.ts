// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ItemListsV1NodeParameters } from "../nodes/ItemListsV1";
import { Node, type NodeProps } from "../../nodes";

export interface ItemListsV1Props extends NodeProps {
    readonly parameters: ItemListsV1NodeParameters;
}

/**
 * Helper for working with lists of items and transforming arrays
 */
export class ItemListsV1<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.itemLists" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ItemListsV1Props) {
        super(id, props);
    }

}
