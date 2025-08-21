// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/BitwardenApi.credentials.ts' credentials

export const name = "bitwardenApi" as const;

/**
 * displayName: Bitwarden API
 * documentationUrl: bitwarden
 */
export interface BitwardenApiNodeParameters {

    /**
     */
    readonly clientId?: string;

    /**
     * Type options: {"password":true}
     */
    readonly clientSecret?: string;

    /**
     * Default: "cloudHosted"
     */
    readonly environment?: "cloudHosted" | "selfHosted";

    /**
     */
    readonly domain?: string;


}

