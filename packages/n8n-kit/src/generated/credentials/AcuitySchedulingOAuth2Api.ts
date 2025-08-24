// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AcuitySchedulingOAuth2Api.credentials.ts' credentials

export const name = "acuitySchedulingOAuth2Api" as const;

/**
 * displayName: AcuityScheduling OAuth2 API
 * documentationUrl: acuityScheduling
 */
export interface AcuitySchedulingOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: any;

    /** Default: "https://acuityscheduling.com/oauth2/authorize" */
    readonly "authUrl": any;

    /** Default: "https://acuityscheduling.com/oauth2/token" */
    readonly "accessTokenUrl": any;

    /** Default: "api-v1" */
    readonly "scope": any;

    readonly "authQueryParameters"?: any;

    /** Default: "body" */
    readonly "authentication"?: any;

    readonly __name: "acuitySchedulingOAuth2Api";
}
