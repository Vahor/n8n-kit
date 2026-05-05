// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/CohereApi.credentials.ts' credentials

export const name = "cohereApi" as const;

/**
 * displayName: Cohere API
 * documentationUrl: cohere
 */
export interface CohereApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey": string;

    /** Default: "https://api.cohere.ai" */
    readonly "url"?: unknown;

    readonly __name: "cohereApi";
}
