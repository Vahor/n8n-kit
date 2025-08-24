// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { RemoveDuplicatesV2NodeParameters } from "../nodes/RemoveDuplicatesV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface RemoveDuplicatesV2Props extends NodeProps {
    readonly parameters: RemoveDuplicatesV2NodeParameters;
}

/**
 * Delete items with matching field values
 */
export class RemoveDuplicatesV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.removeDuplicates" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: RemoveDuplicatesV2Props) {
        super(id, props);
    }

}
