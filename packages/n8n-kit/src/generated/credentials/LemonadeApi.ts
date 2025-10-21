// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/LemonadeApi.credentials.ts' credentials

export const name = "lemonadeApi" as const;

/**
 * displayName: Lemonade
 * documentationUrl: lemonade
 */
export interface LemonadeApiCredentials {
    /** Default: "http://localhost:8000/api/v1" */
    readonly "baseUrl": string;

    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    readonly __name: "lemonadeApi";
}
