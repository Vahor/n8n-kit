// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TheHiveProjectTriggerNodeParameters } from "../nodes/TheHiveProjectTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface TheHiveProjectTriggerProps extends NodeProps {

    readonly parameters: TheHiveProjectTriggerNodeParameters;

}

/**
 * Starts the workflow when TheHive events occur
 */
export class TheHiveProjectTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.theHiveProjectTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: TheHiveProjectTriggerProps) {

        super(id, props);

    }


}
