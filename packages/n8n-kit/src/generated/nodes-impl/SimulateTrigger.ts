// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SimulateTriggerNodeParameters } from "../nodes/SimulateTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface SimulateTriggerProps extends NodeProps {
    readonly parameters: SimulateTriggerNodeParameters;
}

/**
 * Simulate a trigger node
 */
export class SimulateTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.simulateTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: SimulateTriggerProps) {
        super(id, props);
    }

}
