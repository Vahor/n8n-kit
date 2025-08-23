// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MailchimpOAuth2Api.credentials.ts' credentials

export const name = "mailchimpOAuth2Api" as const;

/**
 * displayName: Mailchimp OAuth2 API
 * documentationUrl: mailchimp
 */
export interface MailchimpOAuth2ApiCredentials {
    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://login.mailchimp.com/oauth2/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://login.mailchimp.com/oauth2/token"
     */
    readonly "accessTokenUrl": any;

    /**
     * Default: "https://login.mailchimp.com/oauth2/metadata"
     */
    readonly "metadataUrl": any;

    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /**
     * Default: "body"
     */
    readonly "authentication"?: any;

    readonly __name: "mailchimpOAuth2Api";
}
