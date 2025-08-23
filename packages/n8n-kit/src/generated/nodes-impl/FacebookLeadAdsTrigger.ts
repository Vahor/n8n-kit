// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FacebookLeadAdsOAuth2ApiCredentials } from "../credentials/FacebookLeadAdsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { FacebookLeadAdsTriggerNodeParameters } from "../nodes/FacebookLeadAdsTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface FacebookLeadAdsTriggerProps extends NodeProps, FacebookLeadAdsTriggerNodeParameters {

    readonly facebookLeadAdsOAuth2ApiCredentials: Credentials<FacebookLeadAdsOAuth2ApiCredentials>;

}

export class FacebookLeadAdsTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.facebookLeadAdsTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: FacebookLeadAdsTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<FacebookLeadAdsTriggerNodeParameters, "facebookLeadAdsOAuth2ApiCredentials"> {

        const { facebookLeadAdsOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.facebookLeadAdsOAuth2ApiCredentials];

    }


}
