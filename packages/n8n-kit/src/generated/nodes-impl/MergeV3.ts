// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MergeV3NodeParameters } from "../nodes/MergeV3";
import { Node, type NodeProps } from "../../nodes";

export interface MergeV3Props extends NodeProps, MergeV3NodeParameters {


}

export class MergeV3<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.merge" as const;
    protected typeVersion = 3.2 as const;

    constructor(id: L, public readonly props?: MergeV3Props) {

        super(id, props);

    }

    override getParameters() : MergeV3NodeParameters {

        return this.props ?? {};

    }


}

