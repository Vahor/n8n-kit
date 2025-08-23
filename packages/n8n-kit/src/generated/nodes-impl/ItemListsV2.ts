// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ItemListsV2NodeParameters } from "../nodes/ItemListsV2";
import { Node, type NodeProps } from "../../nodes";

export interface ItemListsV2Props extends NodeProps, ItemListsV2NodeParameters {


}

export class ItemListsV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, public readonly props: ItemListsV2Props) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

