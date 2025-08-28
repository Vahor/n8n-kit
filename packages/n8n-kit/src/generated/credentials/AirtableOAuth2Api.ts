// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AirtableOAuth2Api.credentials.ts' credentials

export const name = "airtableOAuth2Api" as const;

/**
 * displayName: Airtable OAuth2 API
 * documentationUrl: airtable
 */
export interface AirtableOAuth2ApiCredentials {
    /** Default: "pkce" */
    readonly "grantType"?: unknown;

    /** Default: "https://airtable.com/oauth2/v1/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://airtable.com/oauth2/v1/token" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "schema.bases:read data.records:read data.records:write" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "airtableOAuth2Api";
}
