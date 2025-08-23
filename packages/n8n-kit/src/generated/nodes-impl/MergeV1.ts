// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MergeV1NodeParameters } from "../nodes/MergeV1";
import { Node, type NodeProps } from "../../nodes";

export interface MergeV1Props extends NodeProps {

    readonly parameters: MergeV1NodeParameters;

}

export class MergeV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.merge" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: MergeV1Props) {

        super(id, props);

    }


}
