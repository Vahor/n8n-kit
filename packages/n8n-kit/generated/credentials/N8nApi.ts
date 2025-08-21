// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/N8nApi.credentials.ts' credentials

export const name = "n8nApi" as const;

/**
 * displayName: n8n API
 * documentationUrl: https://docs.n8n.io/api/authentication/
 */
export interface N8nApiCredentials {

    /**
     * The API key for the n8n instance
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    /**
     * The API URL of the n8n instance
     */
    readonly "baseUrl"?: string;

    readonly __name: "n8nApi";


}

