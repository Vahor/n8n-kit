// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ShopifyApiCredentials } from "../credentials/ShopifyApi.ts";
import type { ShopifyAccessTokenApiCredentials } from "../credentials/ShopifyAccessTokenApi.ts";
import type { ShopifyOAuth2ApiCredentials } from "../credentials/ShopifyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ShopifyNodeParameters } from "../nodes/Shopify";
import { Node, type NodeProps } from "../../nodes/node";

export interface ShopifyProps extends NodeProps {
    readonly parameters: ShopifyNodeParameters;
    readonly shopifyApiCredentials?: Credentials<ShopifyApiCredentials>;
    readonly shopifyAccessTokenApiCredentials?: Credentials<ShopifyAccessTokenApiCredentials>;
    readonly shopifyOAuth2ApiCredentials?: Credentials<ShopifyOAuth2ApiCredentials>;
}

/**
 * Consume Shopify API
 */
export class Shopify<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.shopify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ShopifyProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.shopifyApiCredentials, this.props!.shopifyAccessTokenApiCredentials, this.props!.shopifyOAuth2ApiCredentials];
    }

}
