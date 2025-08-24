// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SalesforceJwtApi.credentials.ts' credentials

export const name = "salesforceJwtApi" as const;

/**
 * displayName: Salesforce JWT API
 * documentationUrl: salesforce
 */
export interface SalesforceJwtApiCredentials {
    /** Default: "production" */
    readonly "environment"?: "production" | "sandbox";

    /** Consumer Key from Salesforce Connected App */
    readonly "clientId": string;

    readonly "username": string;

    /**
     * Use the multiline editor. Make sure it is in standard PEM key format:<br />-----BEGIN PRIVATE KEY-----<br />KEY DATA GOES HERE<br />-----END PRIVATE KEY-----
     * Type options: {"password":true}
     */
    readonly "privateKey": string;

    readonly __name: "salesforceJwtApi";
}
