// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwilioApiCredentials } from "../credentials/TwilioApi.ts";
import type { Credentials } from "../../credentials";
import type { TwilioTriggerNodeParameters } from "../nodes/TwilioTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface TwilioTriggerProps extends NodeProps {

    readonly parameters: TwilioTriggerNodeParameters;
    readonly twilioApiCredentials: Credentials<TwilioApiCredentials>;

}

/**
 * Starts the workflow on a Twilio update
 */
export class TwilioTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.twilioTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TwilioTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.twilioApiCredentials];

    }


}
