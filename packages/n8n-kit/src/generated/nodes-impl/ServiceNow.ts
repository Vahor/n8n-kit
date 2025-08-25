// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ServiceNowOAuth2ApiCredentials } from "../credentials/ServiceNowOAuth2Api.ts";
import type { ServiceNowBasicApiCredentials } from "../credentials/ServiceNowBasicApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ServiceNowNodeParameters } from "../nodes/ServiceNow";
import { Node, type NodeProps } from "../../nodes/node";

export interface ServiceNowProps extends NodeProps {
    readonly parameters: ServiceNowNodeParameters;
    readonly serviceNowOAuth2ApiCredentials?: Credentials<ServiceNowOAuth2ApiCredentials>;
    readonly serviceNowBasicApiCredentials?: Credentials<ServiceNowBasicApiCredentials>;
}

/**
 * Consume ServiceNow API
 */
export class ServiceNow<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.serviceNow" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ServiceNowProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.serviceNowOAuth2ApiCredentials, this.props!.serviceNowBasicApiCredentials];
    }

}
