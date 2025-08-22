// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Linear/LinearTrigger.node.ts' node

export const name = "linearTrigger" as const;
export const description = "Starts the workflow when Linear events occur" as const;
export const version = 1 as const;

/**
 * Starts the workflow when Linear events occur
 */
export interface LinearTriggerNodeParameters {

    /**
     * Default: "apiToken"
     */
    readonly authentication?: "apiToken" | "oAuth2";

    /**
     */
    readonly notice?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTeams"}
     */
    readonly teamId?: string;

    /**
     * Default: []
     */
    readonly resources: ("reaction" | "cycle" | "issue" | "comment" | "issueLabel" | "project")[];


}

