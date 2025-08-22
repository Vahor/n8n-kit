// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Wait/Wait.node.ts' node

export const name = "wait" as const;
export const description = "Wait before continue with execution" as const;
export const version = 1.1 as const;

/**
 * Wait before continue with execution
 */
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

    /**
     * The date and time to wait for before continuing
     */
    readonly dateTime?: string;

    /**
     * The time to wait
     * Default: 1
     * Type options: {"minValue":0,"numberPrecision":2}
     */
    readonly amount?: number | number;

    /**
     * The time unit of the Wait Amount value
     * Default: "hours"
     */
    readonly unit?: "seconds" | "minutes" | "hours" | "days" | "seconds" | "minutes" | "hours" | "days";

    /**
     */
    readonly webhookNotice?: string;

    /**
     */
    readonly formNotice?: string;

    /**
     * Shown at the top of the form
     */
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
    readonly formFields?: { "values": any };

    /**
     * When to respond to the form submission
     * Default: "onReceived"
     */
    readonly responseMode?: "onReceived" | "lastNode" | "responseNode" | "onReceived" | "lastNode" | "responseNode";

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

    /**
     * Whether to limit the time this node should wait for a user response before execution resumes
     */
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

    /**
     * Continue execution after the specified date and time
     */
    readonly maxDateAndTime?: string;

    /**
     * Default: {}
     */
    readonly options?: { "binaryData"?: boolean, "binaryPropertyName"?: string, "ignoreBots"?: boolean, "ipWhitelist"?: string, "noResponseBody"?: boolean, "rawBody"?: boolean, "responseData"?: string, "responseContentType"?: string, "responseHeaders"?: { "entries": any }, "responsePropertyName"?: string, "webhookSuffix"?: string } | { "appendAttribution"?: boolean, "respondWithOptions"?: { "values": any }, "webhookSuffix"?: string } | { "appendAttribution"?: boolean, "webhookSuffix"?: string };


}

