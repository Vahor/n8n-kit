// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EventbriteApiCredentials } from "../credentials/EventbriteApi.ts";
import type { EventbriteOAuth2ApiCredentials } from "../credentials/EventbriteOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { EventbriteTriggerNodeParameters } from "../nodes/EventbriteTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface EventbriteTriggerProps extends NodeProps {
    readonly parameters: EventbriteTriggerNodeParameters;
    readonly eventbriteApiCredentials?: Credentials<EventbriteApiCredentials>;
    readonly eventbriteOAuth2ApiCredentials?: Credentials<EventbriteOAuth2ApiCredentials>;
}

/**
 * Handle Eventbrite events via webhooks
 */
export class EventbriteTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.eventbriteTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: EventbriteTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.eventbriteApiCredentials, this.props!.eventbriteOAuth2ApiCredentials];
    }

}
