// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Netlify/NetlifyTrigger.node.ts' node

export const name = "netlifyTrigger" as const;
export const description = "Handle netlify events via webhooks" as const;
export const version = 1 as const;
export const credentials = [{"name":"netlifyApi","required":true}] as const;

/**
 * Handle netlify events via webhooks
 */
export interface NetlifyTriggerNodeParameters {

    /**
     * Select the Site ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSites"}
     */
    readonly siteId: string;

    readonly event: "deployBuilding" | "deployFailed" | "deployCreated" | "submissionCreated";

    /**
     * Select a form. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getForms"}
     */
    readonly formId?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;


}

