// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleAdsOAuth2ApiCredentials } from "../credentials/GoogleAdsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleAdsNodeParameters } from "../nodes/GoogleAds";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleAdsProps extends NodeProps {
    readonly parameters: GoogleAdsNodeParameters;
    readonly googleAdsOAuth2ApiCredentials: Credentials<GoogleAdsOAuth2ApiCredentials>;
}

/**
 * Use the Google Ads API
 */
export class GoogleAds<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.googleAds" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GoogleAdsProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleAdsOAuth2ApiCredentials];
    }

}
