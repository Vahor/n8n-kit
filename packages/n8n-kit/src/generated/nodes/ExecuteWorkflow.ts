// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ExecuteWorkflow/ExecuteWorkflow/ExecuteWorkflow.node.ts' node

export const description = "Execute another workflow" as const;
export const type = "n8n-nodes-base.executeWorkflow" as const;
export const version = 1.3 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ExecuteWorkflowNodeParameters {
    /**
     * Where to get the workflow to execute from
     * Default: "database"
     */
    readonly source?: "database" | "localFile" | "parameter" | "url" | "database" | "parameter";

    /** Note on using an expression here: if this node is set to run once with all items, they will all be sent to the <em>same</em> workflow. That workflow's ID will be calculated by evaluating the expression for the <strong>first input item</strong>. */
    readonly workflowId?: string;

    /** The path to local JSON workflow file to execute */
    readonly workflowPath?: string;

    /**
     * The workflow JSON code to execute
     * Default: "\n\n\n"
     * Type options: {"rows":10}
     */
    readonly workflowJson?: string;

    /** The URL from which to load the workflow from */
    readonly workflowUrl?: string;

    /** Default: "once" */
    readonly mode?: "once" | "each";

    /** Default: {} */
    readonly options?: { waitForSubWorkflow?: boolean };

}
