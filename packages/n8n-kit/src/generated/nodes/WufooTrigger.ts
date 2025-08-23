// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Wufoo/WufooTrigger.node.ts' node

export const name = "wufooTrigger" as const;
export const description = "Handle Wufoo events via webhooks" as const;
export const version = 1 as const;
export const credentials = [{"name":"wufooApi","required":true}] as const;

/**
 * Handle Wufoo events via webhooks
 */
export interface WufooTriggerNodeParameters {

    /**
     * The form upon which will trigger this node when a new entry is made. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getForms"}
     */
    readonly form: string;

    /**
     * Whether to return only the answers of the form and not any of the other data
     * Default: true
     */
    readonly onlyAnswers?: boolean;


}

