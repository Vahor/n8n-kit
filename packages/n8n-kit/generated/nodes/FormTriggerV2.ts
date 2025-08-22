// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Form/v2/FormTriggerV2.node.ts' node

export const name = "formTrigger" as const;
export const description = "Generate webforms in n8n and pass their responses to the workflow" as const;
export const version = 2.3 as const;

/**
 * Generate webforms in n8n and pass their responses to the workflow
 */
export interface FormTriggerV2NodeParameters {

    /**
     * Default: "none"
     */
    readonly authentication?: "basicAuth" | "none";

    /**
     * The final segment of the form's URL, both for test and production
     */
    readonly path?: string;

    /**
     * Shown at the top of the form
     */
    readonly formTitle: string;

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
    readonly responseMode?: "onReceived" | "lastNode" | "responseNode" | "onReceived" | "lastNode";

    /**
     */
    readonly formNotice?: string;

    /**
     */
    readonly addFormPage?: string;

    /**
     * Default: {}
     */
    readonly options?: { "appendAttribution"?: boolean, "buttonLabel"?: string, "path"?: string, "respondWithOptions"?: { "values": any }, "ignoreBots"?: boolean, "useWorkflowTimezone"?: boolean, "customCss"?: string };


}

