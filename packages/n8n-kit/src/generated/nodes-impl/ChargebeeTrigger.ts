// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ChargebeeTriggerNodeParameters } from "../nodes/ChargebeeTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface ChargebeeTriggerProps extends NodeProps {
    readonly parameters: ChargebeeTriggerNodeParameters;
}

/**
 * Starts the workflow when Chargebee events occur
 */
export class ChargebeeTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.chargebeeTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ChargebeeTriggerProps) {
        super(id, props);
    }

}
