// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleCalendarOAuth2ApiCredentials } from "../credentials/GoogleCalendarOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleCalendarTriggerNodeParameters } from "../nodes/GoogleCalendarTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleCalendarTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleCalendarTriggerNodeParameters;
    readonly googleCalendarOAuth2ApiCredentials: Credentials<GoogleCalendarOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Google Calendar events occur
 */
export class GoogleCalendarTrigger<L extends string, C extends IContext = never, P extends GoogleCalendarTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleCalendarTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googleCalendarOAuth2ApiCredentials];
    }

}
