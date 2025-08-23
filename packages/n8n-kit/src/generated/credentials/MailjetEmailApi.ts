// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MailjetEmailApi.credentials.ts' credentials

export const name = "mailjetEmailApi" as const;

/**
 * displayName: Mailjet Email API
 * documentationUrl: mailjet
 */
export interface MailjetEmailApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "secretKey"?: string;

    /**
     * Whether to allow to run the API call in a Sandbox mode, where all validations of the payload will be done without delivering the message
     */
    readonly "sandboxMode"?: boolean;

    readonly __name: "mailjetEmailApi";

}
