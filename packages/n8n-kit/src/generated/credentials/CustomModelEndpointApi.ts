// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/CustomModelEndpointApi.credentials.ts' credentials

export const name = "customModelEndpointApi" as const;

/**
 * displayName: Custom Model Endpoint
 * documentationUrl: custommodelendpoint
 */
export interface CustomModelEndpointApiCredentials {
    /** The root URL of the OpenAI-compatible API. n8n adds the paths, such as /chat/completions, to it. */
    readonly "url": string;

    /** Default: "bearer" */
    readonly "authentication"?: "bearer" | "header" | "basic" | "none";

    /** Type options: {"password":true} */
    readonly "apiKey": string;

    /** The name of the header that carries the key */
    readonly "authHeaderName": string;

    /** Text that n8n puts before the key, followed by one space. Leave it empty to send the key alone. */
    readonly "authHeaderPrefix"?: string;

    readonly "username": string;

    /** Type options: {"password":true} */
    readonly "password"?: string;

    /**
     * Headers that n8n sends on every request to this endpoint, including the model list. The values are secret and fixed.
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly "gatewayHeaders"?: { headers: Array<{ name?: string, value?: string }> };

    readonly __name: "customModelEndpointApi";
}
