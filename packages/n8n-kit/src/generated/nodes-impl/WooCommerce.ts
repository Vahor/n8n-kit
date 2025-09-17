// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WooCommerceApiCredentials } from "../credentials/WooCommerceApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WooCommerceNodeParameters } from "../nodes/WooCommerce";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WooCommerceProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WooCommerceNodeParameters;
    readonly wooCommerceApiCredentials: Credentials<WooCommerceApiCredentials>;
}

/**
 * Consume WooCommerce API
 */
export class WooCommerce<L extends string, C extends IContext = never, P extends WooCommerceProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.wooCommerce" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.wooCommerceApiCredentials];
    }

}
