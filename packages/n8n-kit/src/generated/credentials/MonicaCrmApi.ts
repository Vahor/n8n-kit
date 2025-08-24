// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MonicaCrmApi.credentials.ts' credentials

export const name = "monicaCrmApi" as const;

/**
 * displayName: Monica CRM API
 * documentationUrl: monicaCrm
 */
export interface MonicaCrmApiCredentials {
    /** Default: "cloudHosted" */
    readonly "environment"?: "cloudHosted" | "selfHosted";

    readonly "domain"?: string;

    /** Type options: {"password":true} */
    readonly "apiToken"?: string;

    readonly __name: "monicaCrmApi";
}
