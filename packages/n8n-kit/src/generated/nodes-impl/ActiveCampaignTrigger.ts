// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ActiveCampaignApiCredentials } from "../credentials/ActiveCampaignApi.ts";
import type { Credentials } from "../../credentials";
import type { ActiveCampaignTriggerNodeParameters } from "../nodes/ActiveCampaignTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface ActiveCampaignTriggerProps extends NodeProps {
    readonly parameters: ActiveCampaignTriggerNodeParameters;
    readonly activeCampaignApiCredentials: Credentials<ActiveCampaignApiCredentials>;
}

/**
 * Handle ActiveCampaign events via webhooks
 */
export class ActiveCampaignTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.activeCampaignTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ActiveCampaignTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.activeCampaignApiCredentials];
    }

}
