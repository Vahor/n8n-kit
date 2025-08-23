// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ZscalerZiaApi.credentials.ts' credentials

export const name = "zscalerZiaApi" as const;

/**
 * displayName: Zscaler ZIA API
 * documentationUrl: zscalerzia
 */
export interface ZscalerZiaApiCredentials {
    /**
     * Type options: {"expirable":true}
     */
    readonly "cookie"?: any;

    readonly "baseUrl": string;

    readonly "username": string;

    /**
     * Type options: {"password":true}
     */
    readonly "password": string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    readonly __name: "zscalerZiaApi";
}
