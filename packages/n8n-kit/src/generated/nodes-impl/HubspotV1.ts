// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HubspotApiCredentials } from "../credentials/HubspotApi.ts";
import type { HubspotAppTokenCredentials } from "../credentials/HubspotAppToken.ts";
import type { HubspotOAuth2ApiCredentials } from "../credentials/HubspotOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HubspotV1NodeParameters } from "../nodes/HubspotV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface HubspotV1Props extends NodeProps {
    readonly parameters: HubspotV1NodeParameters;
    readonly hubspotApiCredentials?: Credentials<HubspotApiCredentials>;
    readonly hubspotAppTokenCredentials?: Credentials<HubspotAppTokenCredentials>;
    readonly hubspotOAuth2ApiCredentials?: Credentials<HubspotOAuth2ApiCredentials>;
}

/**
 * Consume HubSpot API
 */
export class HubspotV1<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.hubspot" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: HubspotV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.hubspotApiCredentials, this.props!.hubspotAppTokenCredentials, this.props!.hubspotOAuth2ApiCredentials];
    }

}
