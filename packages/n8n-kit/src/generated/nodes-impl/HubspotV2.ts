// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HubspotApiCredentials } from "../credentials/HubspotApi.ts";
import type { HubspotAppTokenCredentials } from "../credentials/HubspotAppToken.ts";
import type { HubspotOAuth2ApiCredentials } from "../credentials/HubspotOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HubspotV2NodeParameters } from "../nodes/HubspotV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface HubspotV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: HubspotV2NodeParameters;
    readonly hubspotApiCredentials?: Credentials<HubspotApiCredentials>;
    readonly hubspotAppTokenCredentials?: Credentials<HubspotAppTokenCredentials>;
    readonly hubspotOAuth2ApiCredentials?: Credentials<HubspotOAuth2ApiCredentials>;
}

/**
 * Consume HubSpot API
 */
export class HubspotV2<L extends string, C extends IContext = never, P extends HubspotV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.hubspot" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.hubspotApiCredentials, this.props?.hubspotAppTokenCredentials, this.props?.hubspotOAuth2ApiCredentials];
    }

}
