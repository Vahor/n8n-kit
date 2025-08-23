// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SplitInBatchesV3NodeParameters } from "../nodes/SplitInBatchesV3";
import { Node, type NodeProps } from "../../nodes";

export interface SplitInBatchesV3Props extends NodeProps, SplitInBatchesV3NodeParameters {


}

export class SplitInBatchesV3<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.splitInBatches" as const;
    protected typeVersion = 3 as const;

    constructor(id: L, public readonly props: SplitInBatchesV3Props) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

