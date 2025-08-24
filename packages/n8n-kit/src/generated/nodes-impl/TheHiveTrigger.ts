// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TheHiveTriggerNodeParameters } from "../nodes/TheHiveTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface TheHiveTriggerProps extends NodeProps {
    readonly parameters: TheHiveTriggerNodeParameters;
}

/**
 * Starts the workflow when TheHive events occur
 */
export class TheHiveTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.theHiveTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: TheHiveTriggerProps) {
        super(id, props);
    }

}
