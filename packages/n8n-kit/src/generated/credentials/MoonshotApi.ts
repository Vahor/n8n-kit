// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/MoonshotApi.credentials.ts' credentials

export const name = "moonshotApi" as const;

/**
 * displayName: Moonshot
 * documentationUrl: moonshot
 */
export interface MoonshotApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey": string;

    /** Default: "international" */
    readonly "region"?: "international" | "china";

    /** Default: "={{ $self.region === \"china\" ? \"https://api.moonshot.cn/v1\" : \"https://api.moonshot.ai/v1\" }}" */
    readonly "url"?: unknown;

    readonly __name: "moonshotApi";
}
