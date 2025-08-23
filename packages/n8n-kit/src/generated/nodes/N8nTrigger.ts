// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/N8nTrigger/N8nTrigger.node.ts' node

export const description = "Handle events and perform actions on your n8n instance" as const;
export const type = "n8n-nodes-base.n8nTrigger" as const;
export const version = 1 as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface N8nTriggerNodeParameters {
    /**
     * Specifies under which conditions an execution should happen:
				<ul>
					<li><b>Active Workflow Updated</b>: Triggers when this workflow is updated</li>
					<li><b>Instance Started</b>:  Triggers when this n8n instance is started or re-started</li>
					<li><b>Workflow Activated</b>: Triggers when this workflow is activated</li>
				</ul>
     * Default: []
     */
    readonly events?: ("update" | "init" | "activate")[];

}
