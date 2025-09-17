// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WooCommerceApiCredentials } from "../credentials/WooCommerceApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WooCommerceTriggerNodeParameters } from "../nodes/WooCommerceTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WooCommerceTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WooCommerceTriggerNodeParameters;
    readonly wooCommerceApiCredentials: Credentials<WooCommerceApiCredentials>;
}

/**
 * Handle WooCommerce events via webhooks
 */
export class WooCommerceTrigger<L extends string, C extends IContext = never, P extends WooCommerceTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.wooCommerceTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.wooCommerceApiCredentials];
    }

}
