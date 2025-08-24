// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ScheduleTriggerNodeParameters } from "../nodes/ScheduleTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface ScheduleTriggerProps extends NodeProps {
    readonly parameters: ScheduleTriggerNodeParameters;
}

/**
 * Triggers the workflow on a given schedule
 */
export class ScheduleTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.scheduleTrigger" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props?: ScheduleTriggerProps) {
        super(id, props);
    }

}
