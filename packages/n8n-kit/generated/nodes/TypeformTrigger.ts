// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Typeform/TypeformTrigger.node.ts' node

export const name = "typeformTrigger" as const;
export const description = "Starts the workflow on a Typeform form submission" as const;
export const version = 1.1 as const;

/**
 * Starts the workflow on a Typeform form submission
 */
export interface TypeformTriggerNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Form which should trigger workflow on submission. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getForms"}
     */
    readonly formId: string;

    /**
     * Whether to convert the answers to a key:value pair ("FIELD_TITLE":"USER_ANSER") to be easily processable
     * Default: true
     */
    readonly simplifyAnswers?: boolean;

    /**
     * Whether to return only the answers of the form and not any of the other data
     * Default: true
     */
    readonly onlyAnswers?: boolean;


}

