// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Toggl/TogglTrigger.node.ts' node

export const description = "Starts the workflow when Toggl events occur" as const;
export const type = "n8n-nodes-base.togglTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"togglApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface TogglTriggerNodeParameters {
    /** Default: "newTimeEntry" */
    readonly event?: "newTimeEntry";

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
