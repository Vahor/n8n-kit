// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PayPalApiCredentials } from "../credentials/PayPalApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PayPalTriggerNodeParameters } from "../nodes/PayPalTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface PayPalTriggerProps extends NodeProps {
    readonly parameters: PayPalTriggerNodeParameters;
    readonly payPalApiCredentials: Credentials<PayPalApiCredentials>;
}

/**
 * Handle PayPal events via webhooks
 */
export class PayPalTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.payPalTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PayPalTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.payPalApiCredentials];
    }

}
