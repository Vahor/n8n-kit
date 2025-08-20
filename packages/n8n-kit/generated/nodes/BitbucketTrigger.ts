// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Bitbucket/BitbucketTrigger.node.ts' node

export const name = "bitbucketTrigger" as const;
export const description = "Handle Bitbucket events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"Bitbucket Trigger"} as const;
export const credentials = [{"name":"bitbucketApi","required":true,"testedBy":"bitbucketApiTest"}] as const

/**
 * Handle Bitbucket events via webhooks
 */
export interface BitbucketTriggerNodeParameters {

    /**
     * Default: "workspace"
     */
    readonly resource: "repository" | "workspace";

    /**
     * The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getWorkspaces"}
     */
    readonly workspace?: string;

    /**
     * The events to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getWorkspaceEvents"}
     */
    readonly events?: ()[];

    /**
     * The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getRepositories","loadOptionsDependsOn":["workspace"]}
     */
    readonly repository?: string;


}

