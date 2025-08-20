// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ExecuteWorkflow/ExecuteWorkflow/ExecuteWorkflow.node.ts' node

export const name = "executeWorkflow" as const;
export const description = "Execute another workflow" as const;
export const version = 1.2 as const;
export const defaults = {"name":"Execute Workflow","color":"#ff6d5a"} as const;

/**
 * Execute another workflow
 */
export interface ExecuteWorkflowNodeParameters {

    /**
     * Default: "call_workflow"
     */
    readonly operation?: any;

    /**
     */
    readonly outdatedVersionWarning?: string;

    /**
     * Where to get the workflow to execute from
     * Default: "database"
     */
    readonly source?: "database" | "localFile" | "parameter" | "url" | "parameter";

    /**
     * Note on using an expression here: if this node is set to run once with all items, they will all be sent to the <em>same</em> workflow. That workflow's ID will be calculated by evaluating the expression for the <strong>first input item</strong>.
     */
    readonly workflowId?: string;

    /**
     * The path to local JSON workflow file to execute
     */
    readonly workflowPath?: string;

    /**
     * The workflow JSON code to execute
     * Default: "\n\n\n"
     * Type options: {"rows":10}
     */
    readonly workflowJson?: string;

    /**
     * The URL from which to load the workflow from
     */
    readonly workflowUrl?: string;

    /**
     */
    readonly executeWorkflowNotice?: string;

    /**
     * Default: {"mappingMode":"defineBelow","value":"null"}
     * Type options: {"loadOptionsDependsOn":["workflowId.value"],"resourceMapper":{"localResourceMapperMethod":"loadSubWorkflowInputs","valuesLabel":"Workflow Inputs","mode":"map","fieldWords":{"singular":"input","plural":"inputs"},"addAllFields":true,"multiKeyMatch":false,"supportAutoMap":false,"showTypeConversionOptions":true}}
     */
    readonly workflowInputs?: any;

    /**
     * Default: "once"
     */
    readonly mode?: "once" | "each";

    /**
     * Default: {}
     */
    readonly options?: { "waitForSubWorkflow"?: boolean };


}

