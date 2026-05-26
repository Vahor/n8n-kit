// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FigmaOAuth2Api.credentials.ts' credentials

export const name = "figmaOAuth2Api" as const;

/**
 * displayName: Figma OAuth2 API
 * documentationUrl: figma
 */
export interface FigmaOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://www.figma.com/oauth" */
    readonly "authUrl": unknown;

    /** Default: "https://api.figma.com/v1/oauth/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "webhooks:read webhooks:write"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"webhooks:read webhooks:write\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "figmaOAuth2Api";
}
