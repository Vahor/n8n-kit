// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GristApi.credentials.ts' credentials

export const name = "gristApi" as const;

/**
 * displayName: Grist API
 * documentationUrl: grist
 */
export interface GristApiCredentials {
    /**
     * In Grist, open the account menu (top right) > Account settings > Developer to create or copy your API key
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    /**
     * Defaults to hosted Grist. Use https://YOUR_TEAM.getgrist.com for a single team, or your own URL if self-managed. Do not include /api.
     * Default: "https://api.getgrist.com"
     */
    readonly "url": string;

    readonly __name: "gristApi";
}
