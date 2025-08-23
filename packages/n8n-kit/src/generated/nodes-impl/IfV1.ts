// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IfV1NodeParameters } from "../nodes/IfV1";
import { Node, type NodeProps } from "../../nodes";

export interface IfV1Props extends NodeProps {

    readonly parameters: IfV1NodeParameters;

}

/**
 * Route items to different branches (true/false)
 */
export class IfV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.if" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: IfV1Props) {

        super(id, props);

    }


}
