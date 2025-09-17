// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PayPalApiCredentials } from "../credentials/PayPalApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PayPalNodeParameters } from "../nodes/PayPal";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PayPalProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PayPalNodeParameters;
    readonly payPalApiCredentials: Credentials<PayPalApiCredentials>;
}

/**
 * Consume PayPal API
 */
export class PayPal<L extends string, C extends IContext = never, P extends PayPalProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.payPal" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.payPalApiCredentials];
    }

}
