// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StripeApiCredentials } from "../credentials/StripeApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { StripeTriggerNodeParameters } from "../nodes/StripeTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface StripeTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: StripeTriggerNodeParameters;
    readonly stripeApiCredentials: Credentials<StripeApiCredentials>;
}

/**
 * Handle Stripe events via webhooks
 */
export class StripeTrigger<L extends string, C extends IContext = never, P extends StripeTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.stripeTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.stripeApiCredentials];
    }

}
