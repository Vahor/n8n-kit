// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HubspotDeveloperApiCredentials } from "../credentials/HubspotDeveloperApi.ts";
import type { Credentials } from "../../credentials";
import type { HubspotTriggerNodeParameters } from "../nodes/HubspotTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface HubspotTriggerProps extends NodeProps, HubspotTriggerNodeParameters {

    readonly hubspotDeveloperApiCredentials: Credentials<HubspotDeveloperApiCredentials>;

}

export class HubspotTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.hubspotTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: HubspotTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<HubspotTriggerNodeParameters, "hubspotDeveloperApiCredentials"> {

        const { hubspotDeveloperApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.hubspotDeveloperApiCredentials];

    }


}

