// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SurveyMonkeyOAuth2Api.credentials.ts' credentials

export const name = "surveyMonkeyOAuth2Api" as const;

/**
 * displayName: SurveyMonkey OAuth2 API
 * documentationUrl: surveymonkey
 */
export interface SurveyMonkeyOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://api.surveymonkey.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.surveymonkey.com/oauth/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "surveys_read,collectors_read,responses_read,responses_read_detail,webhooks_write,webhooks_read" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "surveyMonkeyOAuth2Api";
}
