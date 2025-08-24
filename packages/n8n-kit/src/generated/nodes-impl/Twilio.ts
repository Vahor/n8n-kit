// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwilioApiCredentials } from "../credentials/TwilioApi.ts";
import type { Credentials } from "../../credentials";
import type { TwilioNodeParameters } from "../nodes/Twilio";
import { Node, type NodeProps } from "../../nodes/node";

export interface TwilioProps extends NodeProps {
    readonly parameters: TwilioNodeParameters;
    readonly twilioApiCredentials: Credentials<TwilioApiCredentials>;
}

/**
 * Send SMS and WhatsApp messages or make phone calls
 */
export class Twilio<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.twilio" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TwilioProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.twilioApiCredentials];
    }

}
