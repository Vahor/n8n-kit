// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Form/v2/FormTriggerV2.node.ts' node

export const description = "Generate webforms in n8n and pass their responses to the workflow" as const;
export const type = "n8n-nodes-base.formTrigger" as const;
export const version = 2.3 as const;
export const credentials = [{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"authentication":["basicAuth"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface FormTriggerV2NodeParameters {
    /** Default: "none" */
    readonly authentication?: "basicAuth" | "none";

    /** The final segment of the form's URL, both for test and production */
    readonly path?: string;

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
    readonly responseMode?: "onReceived" | "lastNode" | "responseNode" | "onReceived" | "lastNode";

    /** Default: {} */
    readonly options?: { appendAttribution?: boolean, buttonLabel?: string, path?: string, respondWithOptions?: { values: { respondWith?: "text" | "redirect", formSubmittedText?: string, redirectUrl?: string } }, ignoreBots?: boolean, useWorkflowTimezone?: boolean, customCss?: string };

}
