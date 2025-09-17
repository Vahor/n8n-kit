// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwilioApiCredentials } from "../credentials/TwilioApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TwilioNodeParameters } from "../nodes/Twilio";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TwilioProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TwilioNodeParameters;
    readonly twilioApiCredentials: Credentials<TwilioApiCredentials>;
}

/**
 * Send SMS and WhatsApp messages or make phone calls
 */
export class Twilio<L extends string, C extends IContext = never, P extends TwilioProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.twilio" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.twilioApiCredentials];
    }

}
