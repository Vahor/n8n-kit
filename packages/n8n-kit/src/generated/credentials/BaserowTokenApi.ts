// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/BaserowTokenApi.credentials.ts' credentials

export const name = "baserowTokenApi" as const;

/**
 * displayName: Baserow Token API
 * documentationUrl: baserow
 */
export interface BaserowTokenApiCredentials {
    /** Default: "https://api.baserow.io" */
    readonly "host"?: string;

    /**
     * In Baserow, click on top left corner, My settings, Database tokens, Create new.
     * Type options: {"password":true}
     */
    readonly "token"?: string;

    readonly __name: "baserowTokenApi";
}
