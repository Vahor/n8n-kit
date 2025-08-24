// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CrowdDevApi.credentials.ts' credentials

export const name = "crowdDevApi" as const;

/**
 * displayName: crowd.dev API
 * documentationUrl: crowddev
 */
export interface CrowdDevApiCredentials {
    /** Default: "https://app.crowd.dev" */
    readonly "url"?: string;

    readonly "tenantId"?: string;

    /** Type options: {"password":true} */
    readonly "token"?: string;

    /** Whether to connect even if SSL certificate validation is not possible */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly __name: "crowdDevApi";
}
