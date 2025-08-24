// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { LimitNodeParameters } from "../nodes/Limit";
import { Node, type NodeProps } from "../../nodes/node";

export interface LimitProps extends NodeProps {
    readonly parameters: LimitNodeParameters;
}

/**
 * Restrict the number of items
 */
export class Limit<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.limit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: LimitProps) {
        super(id, props);
    }

}
