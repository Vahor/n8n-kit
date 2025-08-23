// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SolarWindsIpamApi.credentials.ts' credentials

export const name = "solarWindsIpamApi" as const;

/**
 * displayName: SolarWinds IPAM
 * documentationUrl: solarwindsipam
 */
export interface SolarWindsIpamApiCredentials {
    /**
     * The base URL of your SolarWinds IPAM server.
     */
    readonly "url": string;

    /**
     * The username for SolarWinds IPAM API.
     */
    readonly "username": string;

    /**
     * The password for SolarWinds IPAM API.
     * Type options: {"password":true}
     */
    readonly "password": string;

    readonly __name: "solarWindsIpamApi";
}
