// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FreshworksCrmApi.credentials.ts' credentials

export const name = "freshworksCrmApi" as const;

/**
 * displayName: Freshworks CRM API
 * documentationUrl: freshdesk
 */
export interface FreshworksCrmApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    /** Domain in the Freshworks CRM org URL. For example, in <code>https://n8n-org.myfreshworks.com</code>, the domain is <code>n8n-org</code>. */
    readonly "domain"?: string;

    readonly __name: "freshworksCrmApi";
}
