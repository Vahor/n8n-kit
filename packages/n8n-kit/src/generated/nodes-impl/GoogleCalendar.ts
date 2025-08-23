// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleCalendarOAuth2ApiCredentials } from "../credentials/GoogleCalendarOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleCalendarNodeParameters } from "../nodes/GoogleCalendar";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleCalendarProps extends NodeProps {

    readonly parameters: GoogleCalendarNodeParameters;
    readonly googleCalendarOAuth2ApiCredentials: Credentials<GoogleCalendarOAuth2ApiCredentials>;

}

export class GoogleCalendar<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleCalendar" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: GoogleCalendarProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.googleCalendarOAuth2ApiCredentials];

    }


}
