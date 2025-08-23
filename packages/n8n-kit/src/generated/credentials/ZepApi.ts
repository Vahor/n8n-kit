// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/ZepApi.credentials.ts' credentials

export const name = "zepApi" as const;

/**
 * displayName: Zep Api
 * documentationUrl: zep
 */
export interface ZepApiCredentials {

    /**
     */
    readonly "deprecationNotice"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    /**
     * Whether you are adding credentials for Zep Cloud instead of Zep Open Source
     */
    readonly "cloud"?: boolean;

    /**
     * Default: "http://localhost:8000"
     */
    readonly "apiUrl"?: string;

    readonly __name: "zepApi";

}
