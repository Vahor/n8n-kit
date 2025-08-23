// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ActiveCampaignApiCredentials } from "../credentials/ActiveCampaignApi.ts";
import type { Credentials } from "../../credentials";
import type { ActiveCampaignNodeParameters } from "../nodes/ActiveCampaign";
import { Node, type NodeProps } from "../../nodes";

export interface ActiveCampaignProps extends NodeProps {

    readonly parameters: ActiveCampaignNodeParameters;
    readonly activeCampaignApiCredentials: Credentials<ActiveCampaignApiCredentials>;

}

export class ActiveCampaign<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.activeCampaign" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ActiveCampaignProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.activeCampaignApiCredentials];

    }


}
