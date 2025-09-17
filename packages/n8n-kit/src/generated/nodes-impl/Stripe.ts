// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StripeApiCredentials } from "../credentials/StripeApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { StripeNodeParameters } from "../nodes/Stripe";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface StripeProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: StripeNodeParameters;
    readonly stripeApiCredentials: Credentials<StripeApiCredentials>;
}

/**
 * Consume the Stripe API
 */
export class Stripe<L extends string, C extends IContext = never, P extends StripeProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.stripe" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.stripeApiCredentials];
    }

}
