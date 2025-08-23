// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/WorkflowTrigger/WorkflowTrigger.node.ts' node

export const name = "workflowTrigger" as const;
export const description = "Triggers based on various lifecycle events, like when a workflow is activated" as const;
export const version = 1 as const;

/**
 * Triggers based on various lifecycle events, like when a workflow is activated
 */
export interface WorkflowTriggerNodeParameters {

    readonly oldVersionNotice?: string;

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

