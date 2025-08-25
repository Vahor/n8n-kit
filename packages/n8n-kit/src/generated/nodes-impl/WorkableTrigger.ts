// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WorkableApiCredentials } from "../credentials/WorkableApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WorkableTriggerNodeParameters } from "../nodes/WorkableTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface WorkableTriggerProps extends NodeProps {
    readonly parameters: WorkableTriggerNodeParameters;
    readonly workableApiCredentials: Credentials<WorkableApiCredentials>;
}

/**
 * Starts the workflow when Workable events occur
 */
export class WorkableTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.workableTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WorkableTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.workableApiCredentials];
    }

}
