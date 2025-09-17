// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleCalendarOAuth2ApiCredentials } from "../credentials/GoogleCalendarOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleCalendarNodeParameters } from "../nodes/GoogleCalendar";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleCalendarProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleCalendarNodeParameters;
    readonly googleCalendarOAuth2ApiCredentials: Credentials<GoogleCalendarOAuth2ApiCredentials>;
}

/**
 * Consume Google Calendar API
 */
export class GoogleCalendar<L extends string, C extends IContext = never, P extends GoogleCalendarProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleCalendar" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googleCalendarOAuth2ApiCredentials];
    }

}
