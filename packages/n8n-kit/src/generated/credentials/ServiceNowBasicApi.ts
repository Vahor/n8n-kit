// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ServiceNowBasicApi.credentials.ts' credentials

export const name = "serviceNowBasicApi" as const;

/**
 * displayName: ServiceNow Basic Auth API
 * documentationUrl: serviceNow
 */
export interface ServiceNowBasicApiCredentials {
    readonly "user": string;

    /**
     * Type options: {"password":true}
     */
    readonly "password": string;

    readonly "subdomain": string;

    readonly __name: "serviceNowBasicApi";
}
