// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CurrentsApi.credentials.ts' credentials

export const name = "currentsApi" as const;

/**
 * displayName: Currents API
 * documentationUrl: https://docs.currents.dev/api
 */
export interface CurrentsApiCredentials {
    /**
     * API key from Currents Dashboard (Organization > API & Record Keys)
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    readonly __name: "currentsApi";
}
