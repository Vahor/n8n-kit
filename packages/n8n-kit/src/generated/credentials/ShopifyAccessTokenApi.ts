// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ShopifyAccessTokenApi.credentials.ts' credentials

export const name = "shopifyAccessTokenApi" as const;

/**
 * displayName: Shopify Access Token API
 * documentationUrl: shopify
 */
export interface ShopifyAccessTokenApiCredentials {

    /**
     * Only the subdomain without .myshopify.com
     */
    readonly "shopSubdomain": string;

    /**
     * Type options: {"password":true}
     */
    readonly "accessToken": string;

    /**
     * Secret key needed to verify the webhook when using Shopify Trigger node
     * Type options: {"password":true}
     */
    readonly "appSecretKey": string;

    readonly __name: "shopifyAccessTokenApi";

}
