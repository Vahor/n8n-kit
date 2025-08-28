// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MailchimpOAuth2Api.credentials.ts' credentials

export const name = "mailchimpOAuth2Api" as const;

/**
 * displayName: Mailchimp OAuth2 API
 * documentationUrl: mailchimp
 */
export interface MailchimpOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://login.mailchimp.com/oauth2/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://login.mailchimp.com/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "https://login.mailchimp.com/oauth2/metadata" */
    readonly "metadataUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "mailchimpOAuth2Api";
}
