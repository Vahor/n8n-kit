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
    readonly "grantType"?: any;

    readonly "clientId": string;

    /** Type options: {"password":true} */
    readonly "clientSecret": string;

    /** Default: "=https://{{$self[\"shopSubdomain\"]}}.myshopify.com/admin/oauth/authorize" */
    readonly "authUrl": any;

    /** Default: "=https://{{$self[\"shopSubdomain\"]}}.myshopify.com/admin/oauth/access_token" */
    readonly "accessTokenUrl": any;

    /** Default: "write_orders read_orders write_products read_products" */
    readonly "scope"?: any;

    /** Default: "access_mode=value" */
    readonly "authQueryParameters"?: any;

    /** Default: "body" */
    readonly "authentication"?: any;

    readonly __name: "shopifyOAuth2Api";
}
