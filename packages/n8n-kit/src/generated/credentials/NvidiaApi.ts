// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/NvidiaApi.credentials.ts' credentials

export const name = "nvidiaApi" as const;

/**
 * displayName: NVIDIA Nemotron
 * documentationUrl: nvidia
 */
export interface NvidiaApiCredentials {
    /**
     * Use the default for build.nvidia.com cloud, or change it to point at a self-hosted NIM container (e.g. http://localhost:8000/v1)
     * Default: "https://integrate.api.nvidia.com/v1"
     */
    readonly "url": string;

    /**
     * Required for build.nvidia.com cloud. Leave blank for a self-hosted NIM that does not require authentication
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    readonly __name: "nvidiaApi";
}
