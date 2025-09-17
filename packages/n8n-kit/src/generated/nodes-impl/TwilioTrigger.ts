// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwilioApiCredentials } from "../credentials/TwilioApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TwilioTriggerNodeParameters } from "../nodes/TwilioTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TwilioTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TwilioTriggerNodeParameters;
    readonly twilioApiCredentials: Credentials<TwilioApiCredentials>;
}

/**
 * Starts the workflow on a Twilio update
 */
export class TwilioTrigger<L extends string, C extends IContext = never, P extends TwilioTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.twilioTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.twilioApiCredentials];
    }

}
