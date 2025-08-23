// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CalApi.credentials.ts' credentials

export const name = "calApi" as const;

/**
 * displayName: Cal API
 * documentationUrl: cal
 */
export interface CalApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    /**
     * Default: "https://api.cal.com"
     */
    readonly "host"?: string;

    readonly __name: "calApi";

}
