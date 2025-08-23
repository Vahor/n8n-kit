// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MergeV2NodeParameters } from "../nodes/MergeV2";
import { Node, type NodeProps } from "../../nodes";

export interface MergeV2Props extends NodeProps, MergeV2NodeParameters {


}

export class MergeV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, public readonly props: MergeV2Props) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

