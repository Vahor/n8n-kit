// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ShopifyApi.credentials.ts' credentials

export const name = "shopifyApi" as const;

/**
 * displayName: Shopify API
 * documentationUrl: shopify
 */
export interface ShopifyApiCredentials {
    /**
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    /**
     * Type options: {"password":true}
     */
    readonly "password": string;

    /**
     * Only the subdomain without .myshopify.com
     */
    readonly "shopSubdomain": string;

    /**
     * Type options: {"password":true}
     */
    readonly "sharedSecret"?: string;

    readonly __name: "shopifyApi";
}
