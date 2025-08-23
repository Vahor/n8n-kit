// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CiscoSecureEndpointApi.credentials.ts' credentials

export const name = "ciscoSecureEndpointApi" as const;

/**
 * displayName: Cisco Secure Endpoint (AMP) API
 * documentationUrl: ciscosecureendpoint
 */
export interface CiscoSecureEndpointApiCredentials {

    /**
     * Default: "amp"
     */
    readonly "region"?: "apjc.amp" | "eu.amp" | "amp";

    /**
     */
    readonly "clientId": string;

    /**
     * Type options: {"password":true}
     */
    readonly "clientSecret": string;

    readonly __name: "ciscoSecureEndpointApi";

}
