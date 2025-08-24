// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GotifyApi.credentials.ts' credentials

export const name = "gotifyApi" as const;

/**
 * displayName: Gotify API
 * documentationUrl: gotify
 */
export interface GotifyApiCredentials {
    /**
     * (Optional) Needed for message creation
     * Type options: {"password":true}
     */
    readonly "appApiToken"?: string;

    /**
     * (Optional) Needed for everything (delete, getAll) but message creation
     * Type options: {"password":true}
     */
    readonly "clientApiToken"?: string;

    /** The URL of the Gotify host */
    readonly "url"?: string;

    /** Whether to connect even if SSL certificate validation is not possible */
    readonly "ignoreSSLIssues"?: boolean;

    readonly __name: "gotifyApi";
}
