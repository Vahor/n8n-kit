// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/MinimaxApi.credentials.ts' credentials

export const name = "minimaxApi" as const;

/**
 * displayName: MiniMax
 * documentationUrl: minimax
 */
export interface MinimaxApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey": string;

    /** Default: "international" */
    readonly "region"?: "international" | "china";

    /** Default: "={{ $self.region === \"china\" ? \"https://api.minimaxi.com/v1\" : \"https://api.minimax.io/v1\" }}" */
    readonly "url"?: unknown;

    readonly __name: "minimaxApi";
}
