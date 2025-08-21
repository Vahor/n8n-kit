// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/VerticaApi.credentials.ts' credentials

export const name = "verticaApi" as const;

/**
 * displayName: Vertica API
 * documentationUrl: vertica
 */
export interface VerticaApiCredentials {

    /**
     * Default: "https://localhost:8443"
     */
    readonly "url": string;

    /**
     * The username for accessing the Vertica database.
     */
    readonly "username"?: string;

    /**
     * The password for accessing the Vertica database.
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    readonly __name: "verticaApi";


}

