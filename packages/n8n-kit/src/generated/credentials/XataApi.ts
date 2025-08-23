// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/XataApi.credentials.ts' credentials

export const name = "xataApi" as const;

/**
 * displayName: Xata Api
 * documentationUrl: xata
 */
export interface XataApiCredentials {

    /**
     */
    readonly "databaseEndpoint": string;

    /**
     * Default: "main"
     */
    readonly "branch": string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    readonly __name: "xataApi";


}

