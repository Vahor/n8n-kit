// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/JotForm/JotFormTrigger.node.ts' node

export const description = "Handle Jotform events via webhooks" as const;
export const type = "n8n-nodes-base.jotFormTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"jotFormApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface JotFormTriggerNodeParameters {
    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getForms"}
     */
    readonly form?: string;

    /**
     * By default does the webhook-data use internal keys instead of the names. If this option gets activated, it will resolve the keys automatically to the actual names.
     * Default: true
     */
    readonly resolveData?: boolean;

    /**
     * Whether to return only the answers of the form and not any of the other data
     * Default: true
     */
    readonly onlyAnswers?: boolean;

}
