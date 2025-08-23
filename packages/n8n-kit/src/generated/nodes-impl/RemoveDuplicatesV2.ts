// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RemoveDuplicatesV2NodeParameters } from "../nodes/RemoveDuplicatesV2";
import { Node, type NodeProps } from "../../nodes";

export interface RemoveDuplicatesV2Props extends NodeProps, RemoveDuplicatesV2NodeParameters {


}

export class RemoveDuplicatesV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.removeDuplicates" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: RemoveDuplicatesV2Props) {

        super(id, props);

    }

    override getParameters() : RemoveDuplicatesV2NodeParameters {

        return this.props ?? {};

    }


}

