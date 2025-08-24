// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { DebugHelperNodeParameters } from "../nodes/DebugHelper";
import { Node, type NodeProps } from "../../nodes/node";

export interface DebugHelperProps extends NodeProps {
    readonly parameters: DebugHelperNodeParameters;
}

/**
 * Causes problems intentionally and generates useful data for debugging
 */
export class DebugHelper<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.debugHelper" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: DebugHelperProps) {
        super(id, props);
    }

}
