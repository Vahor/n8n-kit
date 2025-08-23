// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Clockify/ClockifyTrigger.node.ts' node

export const description = "Listens to Clockify events" as const;
export const type = "n8n-nodes-base.clockifyTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"clockifyApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface ClockifyTriggerNodeParameters {
    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"listWorkspaces"}
     */
    readonly workspaceId?: string;

    readonly watchField?: "0";

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
