// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/FormIo/FormIoTrigger.node.ts' node

export const description = "Handle form.io events via webhooks" as const;
export const type = "n8n-nodes-base.formIoTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"formIoApi","required":true}] as const;

/**
 * Handle form.io events via webhooks
 */
export interface FormIoTriggerNodeParameters {

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getProjects"}
     */
    readonly projectId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["projectId"],"loadOptionsMethod":"getForms"}
     */
    readonly formId?: string;

    /**
     * Default: []
     */
    readonly events?: ("create" | "update")[];

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;


}

