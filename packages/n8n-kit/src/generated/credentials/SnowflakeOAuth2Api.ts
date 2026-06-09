// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SnowflakeOAuth2Api.credentials.ts' credentials

export const name = "snowflakeOAuth2Api" as const;

/**
 * displayName: Snowflake OAuth2 API
 * documentationUrl: snowflake
 */
export interface SnowflakeOAuth2ApiCredentials {
    /** Your Snowflake account identifier (e.g. <code>xy12345</code> or <code>xy12345.us-east-1</code>). Used to construct the OAuth2 authorization and token URLs. */
    readonly "account": string;

    /** Specify the database you want to use after creating the connection */
    readonly "database"?: string;

    /** The default virtual warehouse to use for the session after connecting. Used for performing queries, loading data, etc. */
    readonly "warehouse"?: string;

    /** Enter the schema you want to use after creating the connection */
    readonly "schema"?: string;

    /** Whether to keep alive the client session. By default, client connections typically time out approximately 3-4 hours after the most recent query was executed. If the parameter clientSessionKeepAlive is set to true, the client's connection to the server will be kept alive indefinitely, even if no queries are executed. */
    readonly "clientSessionKeepAlive"?: boolean;

    /** Default: "pkce" */
    readonly "grantType"?: unknown;

    /** Default: "=https://{{$self[\"account\"]}}.snowflakecomputing.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "=https://{{$self[\"account\"]}}.snowflakecomputing.com/oauth/token-request" */
    readonly "accessTokenUrl": unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "refresh_token session:role:SYSADMIN"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"refresh_token session:role:SYSADMIN\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "snowflakeOAuth2Api";
}
