// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/WhatsApp/WhatsApp.node.ts' node

export const description = "Access WhatsApp API" as const;
export const type = "n8n-nodes-base.whatsApp" as const;
export const version = 1 as const;
export const credentials = [{"name":"whatsAppApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface WhatsAppNodeParameters {
    /** Default: "message" */
    readonly resource?: "message" | "media";

    /** Default: "sendTemplate" */
    readonly operation?: "send" | "sendAndWait" | "sendTemplate" | "mediaUpload" | "mediaUrlGet" | "mediaDelete";

    /**
     * The ID of the business account's phone number from which the message will be sent from
     * Type options: {"loadOptions":{"routing":{"request":{"url":"={{$credentials.businessAccountId}}/phone_numbers","method":"GET"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.display_phone_number}} - {{$responseItem.verified_name}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly phoneNumberId?: string;

    /** Phone number of the recipient of the message */
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
    readonly name?: { data: { formatted_name: string, first_name?: string, last_name?: string, middle_name?: string, suffix?: string, prefix?: string } };

    /** Default: {} */
    readonly additionalFields?: { addresses?: { address: { type?: "HOME" | "WORK", street?: string, city?: string, state?: string, zip?: string, country?: string, country_code?: string } }, birthday?: string, emails?: { data: { type?: "HOME" | "WORK", email?: string } }, organization?: { data: { company?: string, department?: string, title?: string } }, phones?: { data: { type?: "CELL" | "HOME" | "IPHONE" | "MAIN" | "wa_id" | "WORK", phone?: string } }, urls?: { url: { type?: "HOME" | "WORK", url?: string } } } | { nameAndAddress: { name?: string, address?: string } } | { mediaFilename?: string, mediaCaption?: string } | { previewUrl?: boolean } | { mediaFileName?: string };

    /** Type options: {"minValue":-180,"maxValue":180} */
    readonly longitude?: number;

    /** Type options: {"minValue":-90,"maxValue":90} */
    readonly latitude?: number;

    /** The body of the message (max 4096 characters) */
    readonly textBody?: string;

    /**
     * Use a link, an ID, or n8n to upload an audio file
     * Default: "useMediaLink"
     */
    readonly mediaPath?: "useMediaLink" | "useMediaId" | "useMedian8n";

    /** Link of the media to be sent */
    readonly mediaLink?: string;

    /** ID of the media to be sent */
    readonly mediaId?: string;

    /**
     * The name of the input field containing the binary file data to be uploaded
     * Default: "data"
     */
    readonly mediaPropertyName?: string;

    /** The name of the file (required when using a file ID) */
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
    readonly components?: { component: { type?: "body" | "button" | "header", bodyParameters?: { parameter: { type?: "text" | "currency" | "date_time", text?: string, code?: "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UYW" | "UZS" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMW" | "ZWL", amount_1000?: number, date_time?: string, fallback_value?: string } }, sub_type?: "quick_reply" | "url", index?: number, buttonParameters?: { parameter: { type?: "payload" | "text", payload?: string, text?: string } }, headerParameters?: { parameter: { type?: "text" | "currency" | "date_time" | "image", text?: string, code?: "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UYW" | "UZS" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMW" | "ZWL", amount_1000?: number, date_time?: string, imageLink?: string } } } };

    /** The ID of the media */
    readonly mediaGetId?: string;

    /** The ID of the media */
    readonly mediaDeleteId?: string;

    /** Type options: {"rows":4} */
    readonly message?: string;

    /** Default: "approval" */
    readonly responseType?: "approval" | "freeText" | "customForm";

    /** Default: "fields" */
    readonly defineForm?: "fields" | "json";

    /**
     * Default: "[\n   {\n      \"fieldLabel\":\"Name\",\n      \"placeholder\":\"enter you name\",\n      \"requiredField\":true\n   },\n   {\n      \"fieldLabel\":\"Age\",\n      \"fieldType\":\"number\",\n      \"placeholder\":\"enter your age\"\n   },\n   {\n      \"fieldLabel\":\"Email\",\n      \"fieldType\":\"email\",\n      \"requiredField\":true\n   }\n]"
     * Type options: {"rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly formFields?: { values: { fieldLabel: string, fieldName?: string, fieldType: "checkbox" | "html" | "date" | "dropdown" | "email" | "file" | "hiddenField" | "number" | "password" | "radio" | "text" | "textarea", elementName?: string, placeholder?: string, fieldValue?: string, fieldOptions: { values: { option?: string } }, multiselectLegacyNotice?: string, multiselect?: boolean, limitSelection?: "exact" | "range" | "unlimited", numberOfSelections?: number, minSelections?: number, maxSelections?: number, html?: string, multipleFiles?: boolean, acceptFileTypes?: string, formatDate?: string, requiredField?: boolean } };

    /** Default: {} */
    readonly approvalOptions?: { values: { approvalType?: "single" | "double", approveLabel?: string, disapproveLabel?: string } };

    /** Default: {} */
    readonly options?: { limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { messageButtonLabel?: string, responseFormTitle?: string, responseFormDescription?: string, responseFormButtonLabel?: string, responseFormCustomCss?: string, limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean };

}
