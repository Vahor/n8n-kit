// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Form/FormTrigger.node.js' node

export const name = "formTrigger" as const;
export const description = "Runs the flow when an n8n generated webform is submitted" as const;
export const version = 1 as const;
export const defaults = {"name":"n8n Form Trigger"} as const;

/**
 * Runs the flow when an n8n generated webform is submitted
 */
export interface FormTriggerNodeParameters {

    /**
     * Shown at the top of the form
     */
    readonly formTitle: string;

    /**
     * Shown underneath the Form Title. Can be used to prompt the user on how to complete the form.
     */
    readonly formDescription?: string;

    /**
     * Default: {"values":[{"label":"","fieldType":"text"}]}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly formFields?: { "values": any };

    /**
     * When to respond to the form submission
     * Default: "onReceived"
     */
    readonly responseMode?: "onReceived" | "lastNode";

    /**
     * Default: {}
     */
    readonly options?: { "formSubmittedText"?: string };


}

