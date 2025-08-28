// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GongOAuth2Api.credentials.ts' credentials

export const name = "gongOAuth2Api" as const;

/**
 * displayName: Gong OAuth2 API
 * documentationUrl: gong
 */
export interface GongOAuth2ApiCredentials {
    /** Default: "https://api.gong.io" */
    readonly "baseUrl"?: string;

    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://app.gong.io/oauth2/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://app.gong.io/oauth2/generate-customer-token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "api:calls:read:transcript api:provisioning:read api:workspaces:read api:meetings:user:delete api:crm:get-objects api:data-privacy:delete api:crm:schema api:flows:write api:crm:upload api:meetings:integration:status api:calls:read:extensive api:meetings:user:update api:integration-settings:write api:settings:scorecards:read api:stats:scorecards api:stats:interaction api:stats:user-actions api:crm:integration:delete api:calls:read:basic api:calls:read:media-url api:digital-interactions:write api:crm:integrations:read api:library:read api:data-privacy:read api:users:read api:logs:read api:calls:create api:meetings:user:create api:stats:user-actions:detailed api:settings:trackers:read api:crm:integration:register api:provisioning:read-write api:engagement-data:write api:permission-profile:read api:permission-profile:write api:flows:read api:crm-calls:manual-association:read" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "gongOAuth2Api";
}
