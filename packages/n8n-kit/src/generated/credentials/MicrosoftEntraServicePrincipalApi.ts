// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftEntraServicePrincipalApi.credentials.ts' credentials

export const name = "microsoftEntraServicePrincipalApi" as const;

/**
 * displayName: Microsoft Entra Service Principal
 * documentationUrl: microsoftentra
 */
export interface MicrosoftEntraServicePrincipalApiCredentials {
    /** Type options: {"expirable":true} */
    readonly "accessToken"?: unknown;

    /** Default: "clientSecret" */
    readonly "authentication"?: "clientSecret" | "certificate";

    readonly "setupNotice"?: string;

    /** The Directory (tenant) ID from your app registration overview in the Microsoft Entra admin center */
    readonly "tenantId": string;

    /** The Application (client) ID from your app registration overview */
    readonly "clientId": string;

    /**
     * A client secret created under Certificates & secrets
     * Type options: {"password":true}
     */
    readonly "clientSecret": string;

    /**
     * The PEM-encoded RSA private key matching the certificate uploaded to the app registration. Line breaks may be flattened.
     * Type options: {"password":true}
     */
    readonly "privateKey": string;

    /**
     * The PEM-encoded public certificate uploaded under Certificates & secrets on the app registration
     * Type options: {"rows":4}
     */
    readonly "certificate": string;

    /**
     * Select the endpoint for your Microsoft cloud environment.
     * Default: "https://graph.microsoft.com"
     */
    readonly "graphApiBaseUrl"?: "https://graph.microsoft.com" | "https://graph.microsoft.us" | "https://dod-graph.microsoft.us" | "https://microsoftgraph.chinacloudapi.cn";

    readonly __name: "microsoftEntraServicePrincipalApi";
}
