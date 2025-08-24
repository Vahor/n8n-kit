// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MispApi.credentials.ts' credentials

export const name = "mispApi" as const;

/**
 * displayName: MISP API
 * documentationUrl: misp
 */
export interface MispApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    readonly "baseUrl"?: string;

    /** Whether to connect even if SSL certificate validation is not possible */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly __name: "mispApi";
}
