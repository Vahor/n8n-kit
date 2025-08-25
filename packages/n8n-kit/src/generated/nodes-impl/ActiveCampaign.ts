// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ActiveCampaignApiCredentials } from "../credentials/ActiveCampaignApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ActiveCampaignNodeParameters } from "../nodes/ActiveCampaign";
import { Node, type NodeProps } from "../../nodes/node";

export interface ActiveCampaignProps extends NodeProps {
    readonly parameters: ActiveCampaignNodeParameters;
    readonly activeCampaignApiCredentials: Credentials<ActiveCampaignApiCredentials>;
}

/**
 * Create and edit data in ActiveCampaign
 */
export class ActiveCampaign<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.activeCampaign" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ActiveCampaignProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.activeCampaignApiCredentials];
    }

}
