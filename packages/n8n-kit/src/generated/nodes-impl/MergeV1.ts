// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { MergeV1NodeParameters } from "../nodes/MergeV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface MergeV1Props extends NodeProps {
    readonly parameters: MergeV1NodeParameters;
}

/**
 * Merges data of multiple streams once data from both is available
 */
export class MergeV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.merge" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: MergeV1Props) {
        super(id, props);
    }

}
