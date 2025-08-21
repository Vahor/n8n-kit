// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/WiseApi.credentials.ts' credentials

export const name = "wiseApi" as const;

/**
 * displayName: Wise API
 * documentationUrl: wise
 */
export interface WiseApiNodeParameters {

    /**
     * Type options: {"password":true}
     */
    readonly apiToken?: string;

    /**
     * Default: "live"
     */
    readonly environment?: "live" | "test";

    /**
     * Optional private key used for Strong Customer Authentication (SCA). Only needed to retrieve statements, and execute transfers.
     * Type options: {"password":true}
     */
    readonly privateKey?: string;


}

