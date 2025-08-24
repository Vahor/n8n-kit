// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RemoveDuplicatesV2NodeParameters } from "../nodes/RemoveDuplicatesV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface RemoveDuplicatesV2Props extends NodeProps {
    readonly parameters: RemoveDuplicatesV2NodeParameters;
}

/**
 * Delete items with matching field values
 */
export class RemoveDuplicatesV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.removeDuplicates" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: RemoveDuplicatesV2Props) {
        super(id, props);
    }

}
