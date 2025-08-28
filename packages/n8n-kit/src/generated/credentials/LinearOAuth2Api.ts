// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/LinearOAuth2Api.credentials.ts' credentials

export const name = "linearOAuth2Api" as const;

/**
 * displayName: Linear OAuth2 API
 * documentationUrl: linear
 */
export interface LinearOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://linear.app/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.linear.app/oauth/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "user" */
    readonly "actor"?: "user" | "application";

    /** Grants the "Admin" scope, Needed to create webhooks */
    readonly "includeAdminScope"?: boolean;

    /** Default: "={{$self[\"includeAdminScope\"] ? \"read write issues:create comments:create admin\" : \"read write issues:create comments:create\"}}" */
    readonly "scope": unknown;

    /** Default: "={{\"actor=\"+$self[\"actor\"]}}" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "linearOAuth2Api";
}
