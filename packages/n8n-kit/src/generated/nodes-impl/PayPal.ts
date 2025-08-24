// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PayPalApiCredentials } from "../credentials/PayPalApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PayPalNodeParameters } from "../nodes/PayPal";
import { Node, type NodeProps } from "../../nodes/node";

export interface PayPalProps extends NodeProps {
    readonly parameters: PayPalNodeParameters;
    readonly payPalApiCredentials: Credentials<PayPalApiCredentials>;
}

/**
 * Consume PayPal API
 */
export class PayPal<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.payPal" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PayPalProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.payPalApiCredentials];
    }

}
