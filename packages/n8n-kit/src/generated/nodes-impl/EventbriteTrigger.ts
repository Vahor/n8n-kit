// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EventbriteApiCredentials } from "../credentials/EventbriteApi.ts";
import type { EventbriteOAuth2ApiCredentials } from "../credentials/EventbriteOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { EventbriteTriggerNodeParameters } from "../nodes/EventbriteTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface EventbriteTriggerProps extends NodeProps, EventbriteTriggerNodeParameters {

    readonly eventbriteApiCredentials?: Credentials<EventbriteApiCredentials>;
    readonly eventbriteOAuth2ApiCredentials?: Credentials<EventbriteOAuth2ApiCredentials>;

}

export class EventbriteTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.eventbriteTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: EventbriteTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<EventbriteTriggerNodeParameters, "eventbriteApiCredentials | eventbriteOAuth2ApiCredentials"> {

        const { eventbriteApiCredentials:_0, eventbriteOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.eventbriteApiCredentials, this.props.eventbriteOAuth2ApiCredentials];

    }


}
