// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WooCommerceApiCredentials } from "../credentials/WooCommerceApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WooCommerceNodeParameters } from "../nodes/WooCommerce";
import { Node, type NodeProps } from "../../nodes/node";

export interface WooCommerceProps extends NodeProps {
    readonly parameters: WooCommerceNodeParameters;
    readonly wooCommerceApiCredentials: Credentials<WooCommerceApiCredentials>;
}

/**
 * Consume WooCommerce API
 */
export class WooCommerce<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.wooCommerce" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WooCommerceProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.wooCommerceApiCredentials];
    }

}
