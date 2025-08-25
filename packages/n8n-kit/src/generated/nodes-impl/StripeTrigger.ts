// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StripeApiCredentials } from "../credentials/StripeApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { StripeTriggerNodeParameters } from "../nodes/StripeTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface StripeTriggerProps extends NodeProps {
    readonly parameters: StripeTriggerNodeParameters;
    readonly stripeApiCredentials: Credentials<StripeApiCredentials>;
}

/**
 * Handle Stripe events via webhooks
 */
export class StripeTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.stripeTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: StripeTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.stripeApiCredentials];
    }

}
