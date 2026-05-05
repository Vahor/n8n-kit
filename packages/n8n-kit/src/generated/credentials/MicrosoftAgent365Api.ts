// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/MicrosoftAgent365Api.credentials.ts' credentials

export const name = "microsoftAgent365Api" as const;

/**
 * displayName: Microsoft 365 Agent API
 * documentationUrl: microsoftagent365
 */
export interface MicrosoftAgent365ApiCredentials {
    readonly "tenantId": string;

    readonly "clientId": string;

    /** Type options: {"password":true} */
    readonly "clientSecret": string;

    readonly __name: "microsoftAgent365Api";
}
