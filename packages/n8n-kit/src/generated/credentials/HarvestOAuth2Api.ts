// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HarvestOAuth2Api.credentials.ts' credentials

export const name = "harvestOAuth2Api" as const;

/**
 * displayName: Harvest OAuth2 API
 * documentationUrl: harvest
 */
export interface HarvestOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://id.getharvest.com/oauth2/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://id.getharvest.com/api/v2/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "all" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "harvestOAuth2Api";
}
