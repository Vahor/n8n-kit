// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AgileCrmApi.credentials.ts' credentials

export const name = "agileCrmApi" as const;

/**
 * displayName: AgileCRM API
 * documentationUrl: agilecrm
 */
export interface AgileCrmApiCredentials {
    readonly "email"?: string;

    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    /** If the domain is https://example.agilecrm.com "example" would have to be entered */
    readonly "subdomain"?: string;

    readonly __name: "agileCrmApi";
}
