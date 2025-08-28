// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/LineNotifyOAuth2Api.credentials.ts' credentials

export const name = "lineNotifyOAuth2Api" as const;

/**
 * displayName: Line Notify OAuth2 API
 * documentationUrl: line
 */
export interface LineNotifyOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://notify-bot.line.me/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://notify-bot.line.me/oauth/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "notify" */
    readonly "scope": unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "lineNotifyOAuth2Api";
}
