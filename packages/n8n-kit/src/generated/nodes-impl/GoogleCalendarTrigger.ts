// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleCalendarOAuth2ApiCredentials } from "../credentials/GoogleCalendarOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleCalendarTriggerNodeParameters } from "../nodes/GoogleCalendarTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleCalendarTriggerProps extends NodeProps, GoogleCalendarTriggerNodeParameters {

    readonly googleCalendarOAuth2ApiCredentials: Credentials<GoogleCalendarOAuth2ApiCredentials>;

}

export class GoogleCalendarTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleCalendarTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: GoogleCalendarTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleCalendarTriggerNodeParameters, "googleCalendarOAuth2ApiCredentials"> {

        const { googleCalendarOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleCalendarOAuth2ApiCredentials];

    }


}
