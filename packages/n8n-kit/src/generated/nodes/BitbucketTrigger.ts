// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Bitbucket/BitbucketTrigger.node.ts' node

export const description = "Handle Bitbucket events via webhooks" as const;
export const type = "n8n-nodes-base.bitbucketTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"bitbucketApi","required":true,"testedBy":"bitbucketApiTest"}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface BitbucketTriggerNodeParameters {
    /**
     * Default: "workspace"
     */
    readonly resource?: "repository" | "workspace";

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
    readonly events?: any[];

    /**
     * The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getRepositories","loadOptionsDependsOn":["workspace"]}
     */
    readonly repository?: string;

}
