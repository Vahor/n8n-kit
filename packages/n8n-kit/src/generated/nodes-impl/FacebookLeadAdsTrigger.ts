// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FacebookLeadAdsOAuth2ApiCredentials } from "../credentials/FacebookLeadAdsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { FacebookLeadAdsTriggerNodeParameters } from "../nodes/FacebookLeadAdsTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface FacebookLeadAdsTriggerProps extends NodeProps {
    readonly parameters: FacebookLeadAdsTriggerNodeParameters;
    readonly facebookLeadAdsOAuth2ApiCredentials: Credentials<FacebookLeadAdsOAuth2ApiCredentials>;
}

/**
 * Handle Facebook Lead Ads events via webhooks
 */
export class FacebookLeadAdsTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.facebookLeadAdsTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FacebookLeadAdsTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.facebookLeadAdsOAuth2ApiCredentials];
    }

}
