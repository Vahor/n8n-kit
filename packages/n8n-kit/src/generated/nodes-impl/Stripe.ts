// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StripeApiCredentials } from "../credentials/StripeApi.ts";
import type { Credentials } from "../../credentials";
import type { StripeNodeParameters } from "../nodes/Stripe";
import { Node, type NodeProps } from "../../nodes";

export interface StripeProps extends NodeProps {

    readonly parameters: StripeNodeParameters;
    readonly stripeApiCredentials: Credentials<StripeApiCredentials>;

}

/**
 * Consume the Stripe API
 */
export class Stripe<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.stripe" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: StripeProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.stripeApiCredentials];

    }


}
