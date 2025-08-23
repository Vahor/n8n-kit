// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SplitInBatchesV2NodeParameters } from "../nodes/SplitInBatchesV2";
import { Node, type NodeProps } from "../../nodes";

export interface SplitInBatchesV2Props extends NodeProps {

    readonly parameters: SplitInBatchesV2NodeParameters;

}

/**
 * Split data into batches and iterate over each batch
 */
export class SplitInBatchesV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.splitInBatches" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: SplitInBatchesV2Props) {

        super(id, props);

    }


}
