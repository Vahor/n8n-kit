// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { TheHiveProjectTriggerNodeParameters } from "../nodes/TheHiveProjectTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface TheHiveProjectTriggerProps extends NodeProps {
    readonly parameters: TheHiveProjectTriggerNodeParameters;
}

/**
 * Starts the workflow when TheHive events occur
 */
export class TheHiveProjectTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.theHiveProjectTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: TheHiveProjectTriggerProps) {
        super(id, props);
    }

}
