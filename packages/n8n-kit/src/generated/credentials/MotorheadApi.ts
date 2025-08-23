// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/MotorheadApi.credentials.ts' credentials

export const name = "motorheadApi" as const;

/**
 * displayName: MotorheadApi
 * documentationUrl: motorhead
 */
export interface MotorheadApiCredentials {

    /**
     * Default: "https://api.getmetal.io/v1"
     */
    readonly "host": string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    /**
     */
    readonly "clientId"?: string;

    readonly __name: "motorheadApi";

}
