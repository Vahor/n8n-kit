// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftOAuth2Api.credentials.ts' credentials

export const name = "microsoftOAuth2Api" as const;

/**
 * displayName: Microsoft OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /**
     * How n8n authenticates to Microsoft Entra when exchanging and refreshing tokens. Certificate signs a client assertion (private_key_jwt) instead of sending a client secret.
     * Default: "clientSecret"
     */
    readonly "clientCredentialType"?: "clientSecret" | "certificate";

    /** Type options: {"password":true} */
    readonly "clientSecret": string;

    /**
     * PEM-encoded RSA private key paired with the certificate uploaded to the Entra app registration. Use the multiline editor, in standard PEM format:<br />-----BEGIN PRIVATE KEY-----<br />KEY DATA GOES HERE<br />-----END PRIVATE KEY-----
     * Type options: {"password":true,"rows":4}
     */
    readonly "privateKey": string;

    /**
     * PEM-encoded public certificate registered on the Entra app registration (Certificates & secrets). Used to derive the x5t thumbprint that tells Entra which key verifies the assertion.
     * Type options: {"password":true,"rows":4}
     */
    readonly "certificate": string;

    /** Default: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize" */
    readonly "authUrl"?: string;

    /** Default: "https://login.microsoftonline.com/common/oauth2/v2.0/token" */
    readonly "accessTokenUrl"?: string;

    /** Default: "response_mode=query&prompt=select_account" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    /**
     * Select the endpoint for your Microsoft cloud environment.
     * Default: "https://graph.microsoft.com"
     */
    readonly "graphApiBaseUrl"?: "https://graph.microsoft.com" | "https://graph.microsoft.us" | "https://dod-graph.microsoft.us" | "https://microsoftgraph.chinacloudapi.cn";

    readonly __name: "microsoftOAuth2Api";
}
