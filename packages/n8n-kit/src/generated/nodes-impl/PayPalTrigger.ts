// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PayPalApiCredentials } from "../credentials/PayPalApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PayPalTriggerNodeParameters } from "../nodes/PayPalTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PayPalTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PayPalTriggerNodeParameters;
    readonly payPalApiCredentials: Credentials<PayPalApiCredentials>;
}

/**
 * Handle PayPal events via webhooks
 */
export class PayPalTrigger<L extends string, C extends IContext = never, P extends PayPalTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.payPalTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.payPalApiCredentials];
    }

}
