// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ItemListsV2NodeParameters } from "../nodes/ItemListsV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ItemListsV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ItemListsV2NodeParameters;
}

/**
 * Helper for working with lists of items and transforming arrays
 */
export class ItemListsV2<L extends string, C extends IContext = never, P extends ItemListsV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.itemLists" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
