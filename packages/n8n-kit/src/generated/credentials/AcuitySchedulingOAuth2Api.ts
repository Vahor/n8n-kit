// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AcuitySchedulingOAuth2Api.credentials.ts' credentials

export const name = "acuitySchedulingOAuth2Api" as const;

/**
 * displayName: AcuityScheduling OAuth2 API
 * documentationUrl: acuityScheduling
 */
export interface AcuitySchedulingOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://acuityscheduling.com/oauth2/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://acuityscheduling.com/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "api-v1" */
    readonly "scope": unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "acuitySchedulingOAuth2Api";
}
