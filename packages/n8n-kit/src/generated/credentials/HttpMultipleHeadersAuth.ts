// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HttpMultipleHeadersAuth.credentials.ts' credentials

export const name = "httpMultipleHeadersAuth" as const;

/**
 * displayName: Multiple Headers Auth
 * documentationUrl: httprequest
 */
export interface HttpMultipleHeadersAuthCredentials {
    /**
     * Default: {"values":[{"name":"","value":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly "headers"?: { values: Array<{ name?: string, value?: string }> };

    readonly __name: "httpMultipleHeadersAuth";
}
