// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FreshserviceApi.credentials.ts' credentials

export const name = "freshserviceApi" as const;

/**
 * displayName: Freshservice API
 * documentationUrl: freshservice
 */
export interface FreshserviceApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    /**
     * Domain in the Freshservice org URL. For example, in <code>https://n8n.freshservice.com</code>, the domain is <code>n8n</code>
     */
    readonly "domain"?: string;

    readonly __name: "freshserviceApi";

}
