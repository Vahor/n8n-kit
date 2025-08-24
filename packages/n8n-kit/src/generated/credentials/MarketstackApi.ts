// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MarketstackApi.credentials.ts' credentials

export const name = "marketstackApi" as const;

/**
 * displayName: Marketstack API
 * documentationUrl: marketstack
 */
export interface MarketstackApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    /** Whether to use HTTPS (paid plans only) */
    readonly "useHttps"?: boolean;

    readonly __name: "marketstackApi";
}
