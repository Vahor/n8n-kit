// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/VenafiTlsProtectDatacenterApi.credentials.ts' credentials

export const name = "venafiTlsProtectDatacenterApi" as const;

/**
 * displayName: Venafi TLS Protect Datacenter API
 * documentationUrl: venafitlsprotectdatacenter
 */
export interface VenafiTlsProtectDatacenterApiCredentials {

    /**
     */
    readonly "domain"?: string;

    /**
     */
    readonly "clientId"?: string;

    /**
     */
    readonly "username"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     * Default: true
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    /**
     * Type options: {"expirable":true}
     */
    readonly "token"?: any;

    /**
     * Default: "certificate:manage"
     */
    readonly "scope"?: any;

    readonly __name: "venafiTlsProtectDatacenterApi";


}

