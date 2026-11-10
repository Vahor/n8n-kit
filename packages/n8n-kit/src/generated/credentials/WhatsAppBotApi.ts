// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/WhatsAppBotApi.credentials.ts' credentials

export const name = "whatsAppBotApi" as const;

/**
 * displayName: WhatsApp Bot API
 * documentationUrl: whatsapp
 */
export interface WhatsAppBotApiCredentials {
    /**
     * System User access token from the WhatsApp > API Setup page of the Meta app. The token shown there by default is temporary and expires in 24 hours. Use a permanent System User access token instead.
     * Type options: {"password":true}
     */
    readonly "accessToken": string;

    /** The bot phone number ID, from the WhatsApp > API Setup page of the Meta app */
    readonly "phoneNumberId": string;

    /** The WABA ID that owns the phone number, from the same API Setup page */
    readonly "businessAccountId": string;

    /**
     * From App Settings > Basic in the Meta app. Used to verify inbound webhook signatures.
     * Type options: {"password":true}
     */
    readonly "appSecret": string;

    readonly __name: "whatsAppBotApi";
}
