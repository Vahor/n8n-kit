// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ManualTriggerNodeParameters } from "../nodes/ManualTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface ManualTriggerProps extends NodeProps {
    readonly parameters: ManualTriggerNodeParameters;
}

/**
 * Runs the flow on clicking a button in n8n
 */
export class ManualTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.manualTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ManualTriggerProps) {
        super(id, props);
    }

}
