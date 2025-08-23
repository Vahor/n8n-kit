// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostBinNodeParameters } from "../nodes/PostBin";
import { Node, type NodeProps } from "../../nodes";

export interface PostBinProps extends NodeProps {

    readonly parameters: PostBinNodeParameters;

}

export class PostBin<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.postBin" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: PostBinProps) {

        super(id, props);

    }


}
