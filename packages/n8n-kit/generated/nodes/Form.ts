// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Form/Form.node.ts' node

export const name = "form" as const;
export const description = "Generate webforms in n8n and pass their responses to the workflow" as const;
export const version = 2.3 as const;
export const defaults = {"name":"Form"} as const;
export const credentials = undefined 

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


}

