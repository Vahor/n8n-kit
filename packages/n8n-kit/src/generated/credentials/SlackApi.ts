// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SlackApi.credentials.ts' credentials

export const name = "slackApi" as const;

/**
 * displayName: Slack API
 * documentationUrl: slack
 */
export interface SlackApiCredentials {
    /** Type options: {"password":true} */
    readonly "accessToken": string;

    /**
     * The signature secret is used to verify the authenticity of requests sent by Slack.
     * Type options: {"password":true}
     */
    readonly "signatureSecret"?: string;

    readonly "notice"?: string;

    readonly __name: "slackApi";
}
