// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RemoveDuplicatesV1NodeParameters } from "../nodes/RemoveDuplicatesV1";
import { Node, type NodeProps } from "../../nodes";

export interface RemoveDuplicatesV1Props extends NodeProps {

    readonly parameters: RemoveDuplicatesV1NodeParameters;

}

/**
 * Delete items with matching field values
 */
export class RemoveDuplicatesV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.removeDuplicates" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: RemoveDuplicatesV1Props) {

        super(id, props);

    }


}
