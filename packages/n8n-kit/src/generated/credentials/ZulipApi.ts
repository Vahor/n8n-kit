// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ZulipApi.credentials.ts' credentials

export const name = "zulipApi" as const;

/**
 * displayName: Zulip API
 * documentationUrl: zulip
 */
export interface ZulipApiCredentials {
    readonly "url"?: string;

    readonly "email"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    readonly __name: "zulipApi";
}
