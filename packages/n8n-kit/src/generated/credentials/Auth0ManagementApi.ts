// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Auth0ManagementApi.credentials.ts' credentials

export const name = "auth0ManagementApi" as const;

/**
 * displayName: Auth0 Management API
 * documentationUrl: auth0management
 */
export interface Auth0ManagementApiCredentials {
    /** Type options: {"expirable":true,"password":true} */
    readonly "sessionToken"?: any;

    /** Default: "your-domain.eu.auth0.com" */
    readonly "domain": string;

    readonly "clientId": string;

    /** Type options: {"password":true} */
    readonly "clientSecret": string;

    readonly __name: "auth0ManagementApi";
}
