// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { MergeV2NodeParameters } from "../nodes/MergeV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface MergeV2Props extends NodeProps {
    readonly parameters: MergeV2NodeParameters;
}

/**
 * Merges data of multiple streams once data from both is available
 */
export class MergeV2<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.merge" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props?: MergeV2Props) {
        super(id, props);
    }

}
