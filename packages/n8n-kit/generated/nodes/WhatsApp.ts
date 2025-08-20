// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/WhatsApp/WhatsApp.node.ts' node

export const name = "whatsApp" as const;
export const description = "Access WhatsApp API" as const;
export const version = 1 as const;
export const defaults = {"name":"WhatsApp Business Cloud"} as const;
export const credentials = [{"name":"WHATSAPP_CREDENTIALS_TYPE","required":true}] as const

/**
 * Access WhatsApp API
 */
export interface WhatsAppNodeParameters {

    /**
     * Default: "message"
     */
    readonly resource?: "message" | "media";

    /**
     * Default: "sendTemplate"
     */
    readonly operation?: "send" | "SEND_AND_WAIT_OPERATION" | "sendTemplate" | "mediaUpload" | "mediaUrlGet" | "mediaDelete";

    /**
     * Default: "whatsapp"
     */
    readonly messagingProduct?: any;

    /**
     * The ID of the business account's phone number from which the message will be sent from
     * Type options: {"loadOptions":{"routing":{"request":{"url":"={{$credentials.businessAccountId}}/phone_numbers","method":"GET"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.display_phone_number}} - {{$responseItem.verified_name}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly phoneNumberId?: string;

    /**
     * Phone number of the recipient of the message
     */
    readonly recipientPhoneNumber?: string;

    /**
     * The type of the message
     * Default: "text"
     */
    readonly messageType?: "audio" | "contacts" | "document" | "image" | "location" | "text" | "video";

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly name?: { "data": any };

    /**
     * Default: {}
     */
    readonly additionalFields?: { "addresses"?: { "address": any }, "birthday"?: string, "emails"?: { "data": any }, "organization"?: { "data": any }, "phones"?: { "data": any }, "urls"?: { "url": any }, "nameAndAddress"?: any, "mediaFilename"?: string, "mediaCaption"?: string, "previewUrl"?: boolean, "mediaFileName"?: string };

    /**
     * Type options: {"minValue":"-180","maxValue":180}
     */
    readonly longitude?: number;

    /**
     * Type options: {"minValue":"-90","maxValue":90}
     */
    readonly latitude?: number;

    /**
     * The body of the message (max 4096 characters)
     */
    readonly textBody?: string;

    /**
     * Use a link, an ID, or n8n to upload an audio file
     * Default: "useMediaLink"
     */
    readonly mediaPath?: "useMediaLink" | "useMediaId" | "useMedian8n";

    /**
     * Link of the media to be sent
     */
    readonly mediaLink?: string;

    /**
     * ID of the media to be sent
     */
    readonly mediaId?: string;

    /**
     * The name of the input field containing the binary file data to be uploaded
     * Default: "data"
     */
    readonly mediaPropertyName?: string;

    /**
     * The name of the file (required when using a file ID)
     */
    readonly mediaFilename?: string;

    /**
     * Name of the template
     * Type options: {"loadOptions":{"routing":{"request":{"url":"={{$credentials.businessAccountId}}/message_templates","method":"GET"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.name}} - {{$responseItem.language}}","value":"={{$responseItem.name}}|{{$responseItem.language}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly template?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly components?: { "component": any };

    /**
     * The ID of the media
     */
    readonly mediaGetId?: string;

    /**
     * The ID of the media
     */
    readonly mediaDeleteId?: string;


}

