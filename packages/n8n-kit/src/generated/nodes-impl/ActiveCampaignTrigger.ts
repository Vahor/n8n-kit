// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ActiveCampaignApiCredentials } from "../credentials/ActiveCampaignApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ActiveCampaignTriggerNodeParameters } from "../nodes/ActiveCampaignTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ActiveCampaignTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ActiveCampaignTriggerNodeParameters;
    readonly activeCampaignApiCredentials: Credentials<ActiveCampaignApiCredentials>;
}

/**
 * Handle ActiveCampaign events via webhooks
 */
export class ActiveCampaignTrigger<L extends string, C extends IContext = never, P extends ActiveCampaignTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.activeCampaignTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.activeCampaignApiCredentials];
    }

}
