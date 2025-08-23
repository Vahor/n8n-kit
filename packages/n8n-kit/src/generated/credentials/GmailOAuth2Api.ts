// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GmailOAuth2Api.credentials.ts' credentials

export const name = "gmailOAuth2" as const;

/**
 * displayName: Gmail OAuth2 API
 * documentationUrl: google/oauth-single-service
 */
export interface GmailOAuth2ApiCredentials {
    /**
     * Default: "https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.addons.current.action.compose https://www.googleapis.com/auth/gmail.addons.current.message.action https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.compose"
     */
    readonly "scope"?: any;

    readonly __name: "gmailOAuth2";
}
