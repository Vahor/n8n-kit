// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { StartNodeParameters } from "../nodes/Start";
import { Node, type NodeProps } from "../../nodes/node";

export interface StartProps extends NodeProps {
    readonly parameters: StartNodeParameters;
}

/**
 * Starts the workflow execution from this node
 */
export class Start<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.start" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: StartProps) {
        super(id, props);
    }

}
