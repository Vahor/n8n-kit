// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleCalendarOAuth2ApiCredentials } from "../credentials/GoogleCalendarOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleCalendarTriggerNodeParameters } from "../nodes/GoogleCalendarTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleCalendarTriggerProps extends NodeProps {
    readonly parameters: GoogleCalendarTriggerNodeParameters;
    readonly googleCalendarOAuth2ApiCredentials: Credentials<GoogleCalendarOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Google Calendar events occur
 */
export class GoogleCalendarTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.googleCalendarTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GoogleCalendarTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleCalendarOAuth2ApiCredentials];
    }

}
