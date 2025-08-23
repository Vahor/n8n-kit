// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HubspotApiCredentials } from "../credentials/HubspotApi.ts";
import type { HubspotAppTokenCredentials } from "../credentials/HubspotAppToken.ts";
import type { HubspotOAuth2ApiCredentials } from "../credentials/HubspotOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { HubspotV2NodeParameters } from "../nodes/HubspotV2";
import { Node, type NodeProps } from "../../nodes";

export interface HubspotV2Props extends NodeProps, HubspotV2NodeParameters {

    readonly hubspotApiCredentials?: Credentials<HubspotApiCredentials>;
    readonly hubspotAppTokenCredentials?: Credentials<HubspotAppTokenCredentials>;
    readonly hubspotOAuth2ApiCredentials?: Credentials<HubspotOAuth2ApiCredentials>;

}

export class HubspotV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, public readonly props?: HubspotV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<HubspotV2NodeParameters, "hubspotApiCredentials | hubspotAppTokenCredentials | hubspotOAuth2ApiCredentials"> {

        const { hubspotApiCredentials:_0, hubspotAppTokenCredentials:_1, hubspotOAuth2ApiCredentials:_2, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.hubspotApiCredentials, this.props.hubspotAppTokenCredentials, this.props.hubspotOAuth2ApiCredentials];

    }


}
