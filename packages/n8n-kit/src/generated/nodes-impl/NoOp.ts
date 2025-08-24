// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { NoOpNodeParameters } from "../nodes/NoOp";
import { Node, type NodeProps } from "../../nodes/node";

export interface NoOpProps extends NodeProps {
    readonly parameters: NoOpNodeParameters;
}

/**
 * No Operation
 */
export class NoOp<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.noOp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: NoOpProps) {
        super(id, props);
    }

}
