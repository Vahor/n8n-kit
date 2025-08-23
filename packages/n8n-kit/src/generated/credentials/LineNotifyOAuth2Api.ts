// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/LineNotifyOAuth2Api.credentials.ts' credentials

export const name = "lineNotifyOAuth2Api" as const;

/**
 * displayName: Line Notify OAuth2 API
 * documentationUrl: line
 */
export interface LineNotifyOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://notify-bot.line.me/oauth/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://notify-bot.line.me/oauth/token"
     */
    readonly "accessTokenUrl": any;

    /**
     * Default: "notify"
     */
    readonly "scope": any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "lineNotifyOAuth2Api";

}
