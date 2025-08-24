// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { IfV1NodeParameters } from "../nodes/IfV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface IfV1Props extends NodeProps {
    readonly parameters: IfV1NodeParameters;
}

/**
 * Route items to different branches (true/false)
 */
export class IfV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.if" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: IfV1Props) {
        super(id, props);
    }

}
