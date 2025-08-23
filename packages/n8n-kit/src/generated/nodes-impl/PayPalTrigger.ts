// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PayPalApiCredentials } from "../credentials/PayPalApi.ts";
import type { Credentials } from "../../credentials";
import type { PayPalTriggerNodeParameters } from "../nodes/PayPalTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface PayPalTriggerProps extends NodeProps, PayPalTriggerNodeParameters {

    readonly payPalApiCredentials: Credentials<PayPalApiCredentials>;

}

export class PayPalTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.payPalTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: PayPalTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<PayPalTriggerNodeParameters, "payPalApiCredentials"> {

        const { payPalApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.payPalApiCredentials];

    }


}
