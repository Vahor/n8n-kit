// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SplitOutNodeParameters } from "../nodes/SplitOut";
import { Node, type NodeProps } from "../../nodes/node";

export interface SplitOutProps extends NodeProps {
    readonly parameters: SplitOutNodeParameters;
}

/**
 * Turn a list inside item(s) into separate items
 */
export class SplitOut<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.splitOut" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: SplitOutProps) {
        super(id, props);
    }

}
