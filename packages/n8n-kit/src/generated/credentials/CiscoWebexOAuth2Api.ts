// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CiscoWebexOAuth2Api.credentials.ts' credentials

export const name = "ciscoWebexOAuth2Api" as const;

/**
 * displayName: Cisco Webex OAuth2 API
 * documentationUrl: ciscowebex
 */
export interface CiscoWebexOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://webexapis.com/v1/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://webexapis.com/v1/access_token"
     */
    readonly "accessTokenUrl": any;

    /**
     * Default: "spark:memberships_read meeting:recordings_read spark:kms meeting:schedules_read spark:rooms_read spark:messages_write spark:memberships_write meeting:recordings_write meeting:preferences_read spark:messages_read meeting:schedules_write"
     */
    readonly "scope"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "ciscoWebexOAuth2Api";

}
