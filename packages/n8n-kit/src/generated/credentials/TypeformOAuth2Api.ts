// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TypeformOAuth2Api.credentials.ts' credentials

export const name = "typeformOAuth2Api" as const;

/**
 * displayName: Typeform OAuth2 API
 * documentationUrl: typeform
 */
export interface TypeformOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://api.typeform.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.typeform.com/oauth/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"webhooks:write webhooks:read forms:read\"}}" */
    readonly "scope"?: unknown;

    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "webhooks:write webhooks:read forms:read"
     */
    readonly "enabledScopes"?: string;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "typeformOAuth2Api";
}
