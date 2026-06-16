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
    readonly "actor"?: "user" | "app";

    /** Grants the "Admin" scope, Needed to create webhooks */
    readonly "includeAdminScope"?: boolean;

    /** Default: "={{\"read write issues:create comments:create\" + ($self[\"includeAdminScope\"] ? \" admin\" : \"\") + ($self[\"actor\"] === \"app\" ? \" app:mentionable\" : \"\")}}" */
    readonly "scope": unknown;

    /** Default: "={{\"actor=\"+$self[\"actor\"]}}" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    /**
     * The signing secret is used to verify the authenticity of webhook requests sent by Linear.
     * Type options: {"password":true}
     */
    readonly "signingSecret"?: string;

    readonly __name: "linearOAuth2Api";
}
