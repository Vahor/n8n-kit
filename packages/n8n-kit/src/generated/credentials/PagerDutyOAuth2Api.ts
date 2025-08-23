// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/PagerDutyOAuth2Api.credentials.ts' credentials

export const name = "pagerDutyOAuth2Api" as const;

/**
 * displayName: PagerDuty OAuth2 API
 * documentationUrl: pagerDuty
 */
export interface PagerDutyOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://app.pagerduty.com/oauth/authorize"
     */
    readonly "authUrl"?: any;

    /**
     * Default: "https://app.pagerduty.com/oauth/token"
     */
    readonly "accessTokenUrl"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "write"
     */
    readonly "scope"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    readonly __name: "pagerDutyOAuth2Api";

}
