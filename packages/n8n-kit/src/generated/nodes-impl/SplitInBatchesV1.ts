// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SplitInBatchesV1NodeParameters } from "../nodes/SplitInBatchesV1";
import { Node, type NodeProps } from "../../nodes";

export interface SplitInBatchesV1Props extends NodeProps, SplitInBatchesV1NodeParameters {


}

export class SplitInBatchesV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.splitInBatches" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: SplitInBatchesV1Props) {

        super(id, props);

    }

    override getParameters() : SplitInBatchesV1NodeParameters {

        return this.props ?? {};

    }


}

