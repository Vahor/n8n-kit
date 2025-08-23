// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StripeApiCredentials } from "../credentials/StripeApi.ts";
import type { Credentials } from "../../credentials";
import type { StripeTriggerNodeParameters } from "../nodes/StripeTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface StripeTriggerProps extends NodeProps, StripeTriggerNodeParameters {

    readonly stripeApiCredentials: Credentials<StripeApiCredentials>;

}

export class StripeTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.stripeTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: StripeTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { stripeApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.stripeApiCredentials];

    }


}

