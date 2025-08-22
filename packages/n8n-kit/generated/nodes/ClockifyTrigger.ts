// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Clockify/ClockifyTrigger.node.ts' node

export const name = "clockifyTrigger" as const;
export const description = "Listens to Clockify events" as const;
export const version = 1 as const;

/**
 * Listens to Clockify events
 */
export interface ClockifyTriggerNodeParameters {

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"listWorkspaces"}
     */
    readonly workspaceId: string;

    /**
     */
    readonly watchField: "0";


}

