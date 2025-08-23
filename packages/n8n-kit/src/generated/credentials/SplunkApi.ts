// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SplunkApi.credentials.ts' credentials

export const name = "splunkApi" as const;

/**
 * displayName: Splunk API
 * documentationUrl: splunk
 */
export interface SplunkApiCredentials {
    /**
     * Type options: {"password":true}
     */
    readonly "authToken"?: string;

    /**
     * Protocol, domain and port
     */
    readonly "baseUrl"?: string;

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly __name: "splunkApi";
}
