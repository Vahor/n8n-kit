// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CortexApi.credentials.ts' credentials

export const name = "cortexApi" as const;

/**
 * displayName: Cortex API
 * documentationUrl: cortex
 */
export interface CortexApiCredentials {
    /** Type options: {"password":true} */
    readonly "cortexApiKey"?: string;

    /** The URL of the Cortex instance */
    readonly "host"?: string;

    readonly __name: "cortexApi";
}
