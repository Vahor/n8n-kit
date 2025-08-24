// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SimulateNodeParameters } from "../nodes/Simulate";
import { Node, type NodeProps } from "../../nodes/node";

export interface SimulateProps extends NodeProps {
    readonly parameters: SimulateNodeParameters;
}

/**
 * Simulate a node
 */
export class Simulate<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.simulate" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: SimulateProps) {
        super(id, props);
    }

}
