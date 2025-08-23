// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Form/Form.node.ts' node

export const name = "form" as const;
export const description = "Generate webforms in n8n and pass their responses to the workflow" as const;
export const version = 2.3 as const;

/**
 * Generate webforms in n8n and pass their responses to the workflow
 */
export interface FormNodeParameters {

    /**
     */
    readonly triggerNotice?: string;

    /**
     * Default: "page"
     */
    readonly operation?: "page" | "completion";

    /**
     * Default: "fields"
     */
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
    readonly formFields?: { "values": any };

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
    readonly resumeUnit?: "minutes" | "hours" | "days";

    /**
     * Continue execution after the specified date and time
     */
    readonly maxDateAndTime?: string;

    /**
     * Default: {}
     */
    readonly options?: { "formTitle"?: string, "formDescription"?: string, "buttonLabel"?: string, "customCss"?: string } | { "formTitle"?: string, "customCss"?: string };

    /**
     * Default: "text"
     */
    readonly respondWith?: "text" | "redirect" | "showText" | "returnBinary";

    /**
     */
    readonly redirectUrl?: string;

    /**
     */
    readonly completionTitle?: string;

    /**
     * Type options: {"rows":2}
     */
    readonly completionMessage?: string;

    /**
     * The text to display on the page. Use HTML to show a customized web page.
     * Type options: {"rows":2}
     */
    readonly responseText?: string;

    /**
     * Find the name of input field containing the binary data to return in the Input panel on the left, in the Binary tab
     * Default: "data"
     */
    readonly inputDataFieldName?: string;


}

