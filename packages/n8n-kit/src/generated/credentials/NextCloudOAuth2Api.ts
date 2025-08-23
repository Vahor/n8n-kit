// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/NextCloudOAuth2Api.credentials.ts' credentials

export const name = "nextCloudOAuth2Api" as const;

/**
 * displayName: NextCloud OAuth2 API
 * documentationUrl: nextCloud
 */
export interface NextCloudOAuth2ApiCredentials {
    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    readonly "webDavUrl"?: string;

    /**
     * Default: "https://nextcloud.example.com/apps/oauth2/authorize"
     */
    readonly "authUrl": string;

    /**
     * Default: "https://nextcloud.example.com/apps/oauth2/api/v1/token"
     */
    readonly "accessTokenUrl": string;

    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "nextCloudOAuth2Api";
}
