// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwilioApiCredentials } from "../credentials/TwilioApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TwilioNodeParameters } from "../nodes/Twilio";
import { Node, type NodeProps } from "../../nodes/node";

export interface TwilioProps extends NodeProps {
    readonly parameters: TwilioNodeParameters;
    readonly twilioApiCredentials: Credentials<TwilioApiCredentials>;
}

/**
 * Send SMS and WhatsApp messages or make phone calls
 */
export class Twilio<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.twilio" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TwilioProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.twilioApiCredentials];
    }

}
