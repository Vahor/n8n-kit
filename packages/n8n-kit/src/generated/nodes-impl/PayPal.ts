// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PayPalApiCredentials } from "../credentials/PayPalApi.ts";
import type { Credentials } from "../../credentials";
import type { PayPalNodeParameters } from "../nodes/PayPal";
import { Node, type NodeProps } from "../../nodes";

export interface PayPalProps extends NodeProps, PayPalNodeParameters {

    readonly payPalApiCredentials: Credentials<PayPalApiCredentials>;

}

export class PayPal<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.payPal" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: PayPalProps) {

        super(id, props);

    }

    override getParameters() {

        const { payPalApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.payPalApiCredentials];

    }


}

