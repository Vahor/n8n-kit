// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/GoogleVertexAiApi.credentials.ts' credentials

export const name = "googleVertexAiApi" as const;

/**
 * displayName: Google Vertex AI
 * documentationUrl: googlevertexai
 */
export interface GoogleVertexAiApiCredentials {
    /**
     * Select a Google Cloud project, or select Custom to enter a project ID
     * Default: "__custom__"
     * Type options: {"loadOptionsMethod":"gcpProjectsList","loadOptionsDependsOn":["email","privateKey"]}
     */
    readonly "project": "__custom__";

    /** Google Cloud project to use with Vertex AI */
    readonly "projectId": string;

    readonly "inpersonate"?: unknown;

    readonly "delegatedEmail"?: unknown;

    readonly "httpNode"?: unknown;

    readonly "httpWarning"?: unknown;

    readonly "scopes"?: unknown;

    /** Default: "all" */
    readonly "allowedHttpRequestDomains"?: unknown;

    readonly "allowedDomains"?: unknown;

    readonly __name: "googleVertexAiApi";
}
