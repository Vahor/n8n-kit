// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/QualysApi.credentials.ts' credentials

export const name = "qualysApi" as const;

/**
 * displayName: Qualys API
 * documentationUrl: qualys
 */
export interface QualysApiCredentials {

    /**
     */
    readonly "username": string;

    /**
     * Type options: {"password":true}
     */
    readonly "password": string;

    /**
     * User description, like a user agent
     * Default: "n8n application"
     */
    readonly "requestedWith"?: string;

    readonly __name: "qualysApi";


}

