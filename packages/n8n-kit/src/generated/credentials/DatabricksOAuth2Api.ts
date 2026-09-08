// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DatabricksOAuth2Api.credentials.ts' credentials

export const name = "databricksOAuth2Api" as const;

/**
 * displayName: Databricks OAuth2 API
 * documentationUrl: https://docs.databricks.com/dev-tools/api/latest/authentication.html
 */
export interface DatabricksOAuth2ApiCredentials {
    /** Domain of your Databricks workspace, must be <code>https</code> */
    readonly "host": string;

    /** Default: "clientCredentials" */
    readonly "grantType"?: "clientCredentials" | "authorizationCode";

    /** Whether to define custom OAuth scopes instead of the default all-apis */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    readonly "userCustomScopesNotice"?: string;

    /**
     * Space-separated OAuth scopes to request
     * Default: "all-apis"
     */
    readonly "enabledScopes"?: string;

    /**
     * Space-separated OAuth scopes to request
     * Default: "all-apis offline_access"
     */
    readonly "userEnabledScopes"?: string;

    /** Default: "={{$self[\"host\"].replace(/\\/$/, \"\")}}/oidc/v1/authorize" */
    readonly "authUrl": unknown;

    /** Default: "={{$self[\"host\"].replace(/\\/$/, \"\")}}/oidc/v1/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "={{$self[\"customScopes\"] ? ($self[\"grantType\"] === \"authorizationCode\" ? (($self[\"userEnabledScopes\"].trim() || \"all-apis\") + ($self[\"userEnabledScopes\"].trim().split(\" \").includes(\"offline_access\") ? \"\" : \" offline_access\")) : ($self[\"enabledScopes\"].trim() || \"all-apis\")) : ($self[\"grantType\"] === \"authorizationCode\" ? \"all-apis offline_access\" : \"all-apis\")}}" */
    readonly "scope"?: unknown;

    /** Default: true */
    readonly "usePkce"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    /** Default: 403 */
    readonly "tokenExpiredStatusCode"?: unknown;

    readonly __name: "databricksOAuth2Api";
}
