// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/WooCommerceApi.credentials.ts' credentials

export const name = "wooCommerceApi" as const;

/**
 * displayName: WooCommerce API
 * documentationUrl: wooCommerce
 */
export interface WooCommerceApiCredentials {
    /** Type options: {"password":true} */
    readonly "consumerKey"?: string;

    /** Type options: {"password":true} */
    readonly "consumerSecret"?: string;

    readonly "url"?: string;

    /** Whether credentials should be included in the query. Occasionally, some servers may not parse the Authorization header correctly (if you see a “Consumer key is missing” error when authenticating over SSL, you have a server issue). In this case, you may provide the consumer key/secret as query string parameters instead. */
    readonly "includeCredentialsInQuery"?: boolean;

    readonly __name: "wooCommerceApi";
}
