// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ItemListsV3NodeParameters } from "../nodes/ItemListsV3";
import { Node, type NodeProps } from "../../nodes";

export interface ItemListsV3Props extends NodeProps, ItemListsV3NodeParameters {


}

export class ItemListsV3<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.itemLists" as const;
    protected typeVersion = 3.1 as const;

    constructor(id: L, public readonly props?: ItemListsV3Props) {

        super(id, props);

    }

    override getParameters() : ItemListsV3NodeParameters {

        return this.props ?? {};

    }


}

