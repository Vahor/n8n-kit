// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ServiceNowOAuth2ApiCredentials } from "../credentials/ServiceNowOAuth2Api.ts";
import type { ServiceNowBasicApiCredentials } from "../credentials/ServiceNowBasicApi.ts";
import type { Credentials } from "../../credentials";
import type { ServiceNowNodeParameters } from "../nodes/ServiceNow";
import { Node, type NodeProps } from "../../nodes";

export interface ServiceNowProps extends NodeProps {

    readonly parameters: ServiceNowNodeParameters;
    readonly serviceNowOAuth2ApiCredentials?: Credentials<ServiceNowOAuth2ApiCredentials>;
    readonly serviceNowBasicApiCredentials?: Credentials<ServiceNowBasicApiCredentials>;

}

export class ServiceNow<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.serviceNow" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ServiceNowProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.serviceNowOAuth2ApiCredentials, this.props!.serviceNowBasicApiCredentials];

    }


}
