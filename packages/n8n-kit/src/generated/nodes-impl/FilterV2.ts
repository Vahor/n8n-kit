// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FilterV2NodeParameters } from "../nodes/FilterV2";
import { Node, type NodeProps } from "../../nodes";

export interface FilterV2Props extends NodeProps {

    readonly parameters: FilterV2NodeParameters;

}

export class FilterV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.filter" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: FilterV2Props) {

        super(id, props);

    }


}
