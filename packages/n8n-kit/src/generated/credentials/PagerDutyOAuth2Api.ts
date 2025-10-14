// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/PagerDutyOAuth2Api.credentials.ts' credentials

export const name = "pagerDutyOAuth2Api" as const;

/**
 * displayName: PagerDuty OAuth2 API
 * documentationUrl: pagerduty
 */
export interface PagerDutyOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://app.pagerduty.com/oauth/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://app.pagerduty.com/oauth/token" */
    readonly "accessTokenUrl"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "write" */
    readonly "scope"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "pagerDutyOAuth2Api";
}
