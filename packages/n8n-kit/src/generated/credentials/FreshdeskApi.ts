// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FreshdeskApi.credentials.ts' credentials

export const name = "freshdeskApi" as const;

/**
 * displayName: Freshdesk API
 * documentationUrl: freshdesk
 */
export interface FreshdeskApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    /** If the URL you get displayed on Freshdesk is "https://company.freshdesk.com" enter "company" */
    readonly "domain"?: string;

    readonly __name: "freshdeskApi";
}
