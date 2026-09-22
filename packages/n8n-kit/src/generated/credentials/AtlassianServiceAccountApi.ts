// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AtlassianServiceAccountApi.credentials.ts' credentials

export const name = "atlassianServiceAccountApi" as const;

/**
 * displayName: Atlassian Service Account
 * documentationUrl: atlassianserviceaccount
 */
export interface AtlassianServiceAccountApiCredentials {
    /** Type options: {"expirable":true} */
    readonly "accessToken"?: unknown;

    readonly "setupNotice"?: string;

    /** The Client ID of the service account's OAuth 2.0 credential from Atlassian administration */
    readonly "clientId": string;

    /**
     * The Client Secret of the service account's OAuth 2.0 credential from Atlassian administration
     * Type options: {"password":true}
     */
    readonly "clientSecret": string;

    readonly __name: "atlassianServiceAccountApi";
}
