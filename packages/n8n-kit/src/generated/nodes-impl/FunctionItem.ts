// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FunctionItemNodeParameters } from "../nodes/FunctionItem";
import { Node, type NodeProps } from "../../nodes/node";

export interface FunctionItemProps extends NodeProps {
    readonly parameters: FunctionItemNodeParameters;
}

/**
 * Run custom function code which gets executed once per item
 */
export class FunctionItem<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.functionItem" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: FunctionItemProps) {
        super(id, props);
    }

}
