// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HubspotApiCredentials } from "../credentials/HubspotApi.ts";
import type { HubspotAppTokenCredentials } from "../credentials/HubspotAppToken.ts";
import type { HubspotOAuth2ApiCredentials } from "../credentials/HubspotOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { HubspotV2NodeParameters } from "../nodes/HubspotV2";
import { Node, type NodeProps } from "../../nodes";

export interface HubspotV2Props extends NodeProps {
    readonly parameters: HubspotV2NodeParameters;
    readonly hubspotApiCredentials?: Credentials<HubspotApiCredentials>;
    readonly hubspotAppTokenCredentials?: Credentials<HubspotAppTokenCredentials>;
    readonly hubspotOAuth2ApiCredentials?: Credentials<HubspotOAuth2ApiCredentials>;
}

/**
 * Consume HubSpot API
 */
export class HubspotV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.hubspot" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props?: HubspotV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.hubspotApiCredentials, this.props!.hubspotAppTokenCredentials, this.props!.hubspotOAuth2ApiCredentials];
    }

}
