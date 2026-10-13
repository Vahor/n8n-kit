// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SupabaseOAuth2Api.credentials.ts' credentials

export const name = "supabaseOAuth2Api" as const;

/**
 * displayName: Supabase OAuth2 API
 * documentationUrl: supabase
 */
export interface SupabaseOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://api.supabase.com/v1/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.supabase.com/v1/oauth/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: true */
    readonly "usePkce"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "supabaseOAuth2Api";
}
