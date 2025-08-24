// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Form/v1/FormTriggerV1.node.ts' node

export const description = "Generate webforms in n8n and pass their responses to the workflow" as const;
export const type = "n8n-nodes-base.formTrigger" as const;
export const version = 1 as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface FormTriggerV1NodeParameters {
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
    readonly formFields?: { "values": any };

    /**
     * When to respond to the form submission
     * Default: "onReceived"
     */
    readonly responseMode?: "onReceived" | "lastNode" | "responseNode";

    /** Default: {} */
    readonly options?: { "formSubmittedText"?: string };

}
