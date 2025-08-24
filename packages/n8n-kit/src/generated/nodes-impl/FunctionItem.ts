// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { FunctionItemNodeParameters } from "../nodes/FunctionItem";
import { Node, type NodeProps } from "../../nodes/node";

export interface FunctionItemProps extends NodeProps {
    readonly parameters: FunctionItemNodeParameters;
}

/**
 * Run custom function code which gets executed once per item
 */
export class FunctionItem<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.functionItem" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: FunctionItemProps) {
        super(id, props);
    }

}
