// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AirtableOAuth2Api.credentials.ts' credentials

export const name = "airtableOAuth2Api" as const;

/**
 * displayName: Airtable OAuth2 API
 * documentationUrl: airtable
 */
export interface AirtableOAuth2ApiCredentials {

    /**
     * Default: "pkce"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://airtable.com/oauth2/v1/authorize"
     */
    readonly "authUrl"?: any;

    /**
     * Default: "https://airtable.com/oauth2/v1/token"
     */
    readonly "accessTokenUrl"?: any;

    /**
     * Default: "schema.bases:read data.records:read data.records:write"
     */
    readonly "scope"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    readonly __name: "airtableOAuth2Api";

}
