// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StripeApiCredentials } from "../credentials/StripeApi.ts";
import type { Credentials } from "../../credentials";
import type { StripeNodeParameters } from "../nodes/Stripe";
import { Node, type NodeProps } from "../../nodes";

export interface StripeProps extends NodeProps, StripeNodeParameters {

    readonly stripeApiCredentials: Credentials<StripeApiCredentials>;

}

export class Stripe<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.stripe" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: StripeProps) {

        super(id, props);

    }

    override getParameters() : Omit<StripeNodeParameters, "stripeApiCredentials"> {

        const { stripeApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.stripeApiCredentials];

    }


}

