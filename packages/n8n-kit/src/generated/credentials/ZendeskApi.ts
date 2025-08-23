// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ZendeskApi.credentials.ts' credentials

export const name = "zendeskApi" as const;

/**
 * displayName: Zendesk API
 * documentationUrl: zendesk
 */
export interface ZendeskApiCredentials {

    /**
     * The subdomain of your Zendesk work environment
     */
    readonly "subdomain"?: string;

    /**
     */
    readonly "email"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiToken"?: string;

    readonly __name: "zendeskApi";


}

