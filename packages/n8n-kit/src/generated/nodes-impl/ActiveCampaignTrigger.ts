// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ActiveCampaignApiCredentials } from "../credentials/ActiveCampaignApi.ts";
import type { Credentials } from "../../credentials";
import type { ActiveCampaignTriggerNodeParameters } from "../nodes/ActiveCampaignTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ActiveCampaignTriggerProps extends NodeProps, ActiveCampaignTriggerNodeParameters {

    readonly activeCampaignApiCredentials: Credentials<ActiveCampaignApiCredentials>;

}

export class ActiveCampaignTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.activeCampaignTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ActiveCampaignTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { activeCampaignApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.activeCampaignApiCredentials];

    }


}

