// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TaigaApi.credentials.ts' credentials

export const name = "taigaApi" as const;

/**
 * displayName: Taiga API
 * documentationUrl: taiga
 */
export interface TaigaApiCredentials {
    readonly "username"?: string;

    /** Type options: {"password":true} */
    readonly "password"?: string;

    /** Default: "cloud" */
    readonly "environment"?: "cloud" | "selfHosted";

    readonly "url"?: string;

    readonly __name: "taigaApi";
}
