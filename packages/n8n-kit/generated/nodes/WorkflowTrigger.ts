// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/WorkflowTrigger/WorkflowTrigger.node.js' node

export const name = "workflowTrigger" as const;
export const description = "Triggers based on various lifecycle events, like when a workflow is activated" as const;
export const version = 1 as const;
export const defaults = {"name":"Workflow Trigger","color":"#ff6d5a"} as const;

/**
 * Triggers based on various lifecycle events, like when a workflow is activated
 */
export interface WorkflowTriggerNodeParameters {

    /**
     * Specifies under which conditions an execution should happen:
					<ul>
						<li><b>Active Workflow Updated</b>: Triggers when this workflow is updated</li>
						<li><b>Workflow Activated</b>: Triggers when this workflow is activated</li>
					</ul>
     * Default: []
     */
    readonly events: ("update" | "activate")[];


}

