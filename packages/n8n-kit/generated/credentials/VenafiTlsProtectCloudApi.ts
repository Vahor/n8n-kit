// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/VenafiTlsProtectCloudApi.credentials.ts' credentials

export const name = "venafiTlsProtectCloudApi" as const;

/**
 * displayName: Venafi TLS Protect Cloud
 * documentationUrl: venafitlsprotectcloud
 */
export interface VenafiTlsProtectCloudApiNodeParameters {

    /**
     * Default: "cloud"
     */
    readonly region?: "cloud" | "eu";

    /**
     * Type options: {"password":true}
     */
    readonly apiKey?: string;


}

