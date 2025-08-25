// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Wait/Wait.node.ts' node

export const description = "Wait before continue with execution" as const;
export const type = "n8n-nodes-base.wait" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"incomingAuthentication":["basicAuth"]}}},{"name":"httpHeaderAuth","required":true,"displayOptions":{"show":{"incomingAuthentication":["headerAuth"]}}},{"name":"jwtAuth","required":true,"displayOptions":{"show":{"incomingAuthentication":["jwtAuth"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface WaitNodeParameters {
    /**
     * Determines the waiting mode to use before the workflow continues
     * Default: "timeInterval"
     */
    readonly resume?: "timeInterval" | "specificTime" | "webhook" | "form";

    /**
     * If and how incoming resume-webhook-requests to $execution.resumeFormUrl should be authenticated for additional security
     * Default: "none"
     */
    readonly incomingAuthentication?: "basicAuth" | "none" | "basicAuth" | "headerAuth" | "jwtAuth" | "none";

    /** The date and time to wait for before continuing */
    readonly dateTime?: string;

    /**
     * The time to wait
     * Default: 1
     * Type options: {"minValue":0,"numberPrecision":2}
     */
    readonly amount?: number;

    /**
     * The time unit of the Wait Amount value
     * Default: "hours"
     */
    readonly unit?: "seconds" | "minutes" | "hours" | "days";

    /** Shown at the top of the form */
    readonly formTitle?: string;

    /**
     * Shown underneath the Form Title. Can be used to prompt the user on how to complete the form. Accepts HTML.
     * Type options: {"rows":2}
     */
    readonly formDescription?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly formFields?: { values: Array<{ fieldLabel: string, fieldName?: string, fieldType: "checkbox" | "html" | "date" | "dropdown" | "email" | "file" | "hiddenField" | "number" | "password" | "radio" | "text" | "textarea", elementName?: string, placeholder?: string, fieldValue?: string, fieldOptions: { values: Array<{ option?: string }> }, multiselectLegacyNotice?: string, multiselect?: boolean, limitSelection?: "exact" | "range" | "unlimited", numberOfSelections?: number, minSelections?: number, maxSelections?: number, html?: string, multipleFiles?: boolean, acceptFileTypes?: string, formatDate?: string, requiredField?: boolean }> };

    /**
     * When to respond to the form submission
     * Default: "onReceived"
     */
    readonly responseMode?: "onReceived" | "lastNode" | "responseNode";

    /**
     * The HTTP method of the Webhook call
     * Default: "GET"
     */
    readonly httpMethod?: "DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT";

    /**
     * The HTTP Response code to return
     * Default: 200
     * Type options: {"minValue":100,"maxValue":599}
     */
    readonly responseCode?: number;

    /**
     * What data should be returned. If it should return all items as an array or only the first item as object.
     * Default: "firstEntryJson"
     */
    readonly responseData?: "allEntries" | "firstEntryJson" | "firstEntryBinary" | "noData";

    /**
     * Name of the binary property to return
     * Default: "data"
     */
    readonly responseBinaryPropertyName?: string;

    /** Whether to limit the time this node should wait for a user response before execution resumes */
    readonly limitWaitTime?: boolean;

    /**
     * Sets the condition for the execution to resume. Can be a specified date or after some time.
     * Default: "afterTimeInterval"
     */
    readonly limitType?: "afterTimeInterval" | "atSpecifiedTime";

    /**
     * The time to wait
     * Default: 1
     * Type options: {"minValue":0,"numberPrecision":2}
     */
    readonly resumeAmount?: number;

    /**
     * Unit of the interval value
     * Default: "hours"
     */
    readonly resumeUnit?: "seconds" | "minutes" | "hours" | "days";

    /** Continue execution after the specified date and time */
    readonly maxDateAndTime?: string;

    /** Default: {} */
    readonly options?: { binaryData?: boolean, binaryPropertyName?: string, ignoreBots?: boolean, ipWhitelist?: string, noResponseBody?: boolean, rawBody?: boolean, responseData?: string, responseContentType?: string, responseHeaders?: { entries: Array<{ name?: string, value?: string }> }, responsePropertyName?: string, webhookSuffix?: string } | { appendAttribution?: boolean, respondWithOptions?: { values: { respondWith?: "text" | "redirect", formSubmittedText?: string, redirectUrl?: string } }, webhookSuffix?: string } | { appendAttribution?: boolean, webhookSuffix?: string };

}
