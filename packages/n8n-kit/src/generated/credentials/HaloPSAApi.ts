// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HaloPSAApi.credentials.ts' credentials

export const name = "haloPSAApi" as const;

/**
 * displayName: HaloPSA API
 * documentationUrl: halopsa
 */
export interface HaloPSAApiCredentials {
    /**
     * Default: "onPremise"
     */
    readonly "hostingType"?: "onPremise" | "hostedHalo";

    readonly "authUrl": string;

    /**
     * The Resource server is available at your "Halo Web Application URL/api"
     */
    readonly "resourceApiUrl": string;

    /**
     * Must be your application client ID
     */
    readonly "client_id": string;

    /**
     * Must be your application client secret
     * Type options: {"password":true}
     */
    readonly "client_secret": string;

    /**
     * An additional tenant parameter for HaloPSA hosted solution
     */
    readonly "tenant"?: string;

    /**
     * Default: "admin edit:tickets edit:customers"
     */
    readonly "scope": any;

    readonly __name: "haloPSAApi";
}
