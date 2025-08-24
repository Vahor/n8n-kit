// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/BaserowApi.credentials.ts' credentials

export const name = "baserowApi" as const;

/**
 * displayName: Baserow API
 * documentationUrl: baserow
 */
export interface BaserowApiCredentials {
    /** Default: "https://api.baserow.io" */
    readonly "host"?: string;

    readonly "username"?: string;

    /** Type options: {"password":true} */
    readonly "password"?: string;

    readonly __name: "baserowApi";
}
