// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HubspotDeveloperApiCredentials } from "../credentials/HubspotDeveloperApi.ts";
import type { Credentials } from "../../credentials";
import type { HubspotTriggerNodeParameters } from "../nodes/HubspotTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface HubspotTriggerProps extends NodeProps {
    readonly parameters: HubspotTriggerNodeParameters;
    readonly hubspotDeveloperApiCredentials: Credentials<HubspotDeveloperApiCredentials>;
}

/**
 * Starts the workflow when HubSpot events occur
 */
export class HubspotTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.hubspotTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: HubspotTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.hubspotDeveloperApiCredentials];
    }

}
