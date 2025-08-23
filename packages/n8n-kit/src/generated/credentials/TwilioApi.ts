// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TwilioApi.credentials.ts' credentials

export const name = "twilioApi" as const;

/**
 * displayName: Twilio API
 * documentationUrl: twilio
 */
export interface TwilioApiCredentials {

    /**
     * Default: "authToken"
     */
    readonly "authType"?: "authToken" | "apiKey";

    /**
     */
    readonly "accountSid"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "authToken"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKeySid"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKeySecret"?: string;

    readonly __name: "twilioApi";

}
