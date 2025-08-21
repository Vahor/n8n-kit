// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GristApi.credentials.ts' credentials

export const name = "gristApi" as const;

/**
 * displayName: Grist API
 * documentationUrl: grist
 */
export interface GristApiNodeParameters {

    /**
     * Type options: {"password":true}
     */
    readonly apiKey: string;

    /**
     * Default: "free"
     */
    readonly planType?: "free" | "paid" | "selfHosted";

    /**
     * Custom subdomain of your team
     */
    readonly customSubdomain: string;

    /**
     * URL of your Grist instance. Include http/https without /api and no trailing slash.
     */
    readonly selfHostedUrl: string;


}

