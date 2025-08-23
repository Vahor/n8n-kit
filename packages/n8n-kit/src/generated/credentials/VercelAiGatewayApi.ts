// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/VercelAiGatewayApi.credentials.ts' credentials

export const name = "vercelAiGatewayApi" as const;

/**
 * displayName: Vercel AI Gateway
 * documentationUrl: vercelaigateway
 */
export interface VercelAiGatewayApiCredentials {

    /**
     * Your credentials for the Vercel AI Gateway
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    /**
     * The base URL for your Vercel AI Gateway instance
     * Default: "https://ai-gateway.vercel.sh/v1"
     */
    readonly "url": string;

    readonly __name: "vercelAiGatewayApi";

}
