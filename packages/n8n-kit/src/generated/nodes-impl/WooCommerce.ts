// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WooCommerceApiCredentials } from "../credentials/WooCommerceApi.ts";
import type { Credentials } from "../../credentials";
import type { WooCommerceNodeParameters } from "../nodes/WooCommerce";
import { Node, type NodeProps } from "../../nodes";

export interface WooCommerceProps extends NodeProps {

    readonly parameters: WooCommerceNodeParameters;
    readonly wooCommerceApiCredentials: Credentials<WooCommerceApiCredentials>;

}

/**
 * Consume WooCommerce API
 */
export class WooCommerce<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.wooCommerce" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WooCommerceProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.wooCommerceApiCredentials];

    }


}
