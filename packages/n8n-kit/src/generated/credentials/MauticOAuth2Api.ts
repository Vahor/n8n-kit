// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MauticOAuth2Api.credentials.ts' credentials

export const name = "mauticOAuth2Api" as const;

/**
 * displayName: Mautic OAuth2 API
 * documentationUrl: mautic
 */
export interface MauticOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     */
    readonly "url"?: string;

    /**
     * Default: "={{$self[\"url\"].endsWith(\"/\") ? $self[\"url\"].slice(0, -1) : $self[\"url\"]}}/oauth/v2/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "={{$self[\"url\"].endsWith(\"/\") ? $self[\"url\"].slice(0, -1) : $self[\"url\"]}}/oauth/v2/token"
     */
    readonly "accessTokenUrl": any;

    /**
     */
    readonly "scope"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "mauticOAuth2Api";

}
