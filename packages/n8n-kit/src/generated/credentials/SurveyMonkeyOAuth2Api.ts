// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SurveyMonkeyOAuth2Api.credentials.ts' credentials

export const name = "surveyMonkeyOAuth2Api" as const;

/**
 * displayName: SurveyMonkey OAuth2 API
 * documentationUrl: surveyMonkey
 */
export interface SurveyMonkeyOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://api.surveymonkey.com/oauth/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://api.surveymonkey.com/oauth/token"
     */
    readonly "accessTokenUrl": any;

    /**
     * Default: "surveys_read,collectors_read,responses_read,responses_read_detail,webhooks_write,webhooks_read"
     */
    readonly "scope"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "surveyMonkeyOAuth2Api";

}
