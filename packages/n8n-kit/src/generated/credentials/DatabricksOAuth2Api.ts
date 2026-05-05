// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DatabricksOAuth2Api.credentials.ts' credentials

export const name = "databricksOAuth2Api" as const;

/**
 * displayName: Databricks OAuth2 API
 * documentationUrl: https://docs.databricks.com/dev-tools/api/latest/authentication.html
 */
export interface DatabricksOAuth2ApiCredentials {
    /** Domain of your Databricks workspace */
    readonly "host": string;

    /** Default: "clientCredentials" */
    readonly "grantType"?: unknown;

    /** Default: "={{$self[\"host\"]}}/oidc/v1/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "all-apis" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "databricksOAuth2Api";
}
