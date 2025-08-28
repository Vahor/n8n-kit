// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HighLevelOAuth2Api.credentials.ts' credentials

export const name = "highLevelOAuth2Api" as const;

/**
 * displayName: HighLevel OAuth2 API
 * documentationUrl: highLevel
 */
export interface HighLevelOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://marketplace.leadconnectorhq.com/oauth/chooselocation" */
    readonly "authUrl": "https://marketplace.leadconnectorhq.com/oauth/chooselocation" | "https://marketplace.gohighlevel.com/oauth/chooselocation";

    readonly "scope": string;

    /** Default: "https://services.leadconnectorhq.com/oauth/token" */
    readonly "accessTokenUrl"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly "notice"?: string;

    readonly __name: "highLevelOAuth2Api";
}
