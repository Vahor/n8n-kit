// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwilioApiCredentials } from "../credentials/TwilioApi.ts";
import type { Credentials } from "../../credentials";
import type { TwilioTriggerNodeParameters } from "../nodes/TwilioTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface TwilioTriggerProps extends NodeProps, TwilioTriggerNodeParameters {

    readonly twilioApiCredentials: Credentials<TwilioApiCredentials>;

}

export class TwilioTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.twilioTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TwilioTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<TwilioTriggerNodeParameters, "twilioApiCredentials"> {

        const { twilioApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.twilioApiCredentials];

    }


}
