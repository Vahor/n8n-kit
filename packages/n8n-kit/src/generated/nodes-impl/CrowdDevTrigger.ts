// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CrowdDevApiCredentials } from "../credentials/CrowdDevApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CrowdDevTriggerNodeParameters } from "../nodes/CrowdDevTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface CrowdDevTriggerProps extends NodeProps {
    readonly parameters: CrowdDevTriggerNodeParameters;
    readonly crowdDevApiCredentials: Credentials<CrowdDevApiCredentials>;
}

/**
 * Starts the workflow when crowd.dev events occur.
 */
export class CrowdDevTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.crowdDevTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CrowdDevTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.crowdDevApiCredentials];
    }

}
