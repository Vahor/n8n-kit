// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { IfV2NodeParameters } from "../nodes/IfV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface IfV2Props extends NodeProps {
    readonly parameters: IfV2NodeParameters;
}

/**
 * Route items to different branches (true/false)
 */
export class IfV2<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.if" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: IfV2Props) {
        super(id, props);
    }

}
