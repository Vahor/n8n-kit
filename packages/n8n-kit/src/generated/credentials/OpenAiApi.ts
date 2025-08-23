// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/OpenAiApi.credentials.ts' credentials

export const name = "openAiApi" as const;

/**
 * displayName: OpenAi
 * documentationUrl: openAi
 */
export interface OpenAiApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    /**
     * For users who belong to multiple organizations, you can set which organization is used for an API request. Usage from these API requests will count against the specified organization's subscription quota.
     */
    readonly "organizationId"?: string;

    /**
     * Override the default base URL for the API
     * Default: "https://api.openai.com/v1"
     */
    readonly "url"?: string;

    readonly __name: "openAiApi";


}

