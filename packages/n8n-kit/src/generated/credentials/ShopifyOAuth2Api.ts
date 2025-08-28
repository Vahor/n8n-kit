// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ShopifyOAuth2Api.credentials.ts' credentials

export const name = "shopifyOAuth2Api" as const;

/**
 * displayName: Shopify OAuth2 API
 * documentationUrl: shopify
 */
export interface ShopifyOAuth2ApiCredentials {
    /** Only the subdomain without .myshopify.com */
    readonly "shopSubdomain": string;

    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    readonly "clientId": string;

    /** Type options: {"password":true} */
    readonly "clientSecret": string;

    /** Default: "=https://{{$self[\"shopSubdomain\"]}}.myshopify.com/admin/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "=https://{{$self[\"shopSubdomain\"]}}.myshopify.com/admin/oauth/access_token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "write_orders read_orders write_products read_products" */
    readonly "scope"?: unknown;

    /** Default: "access_mode=value" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "shopifyOAuth2Api";
}
