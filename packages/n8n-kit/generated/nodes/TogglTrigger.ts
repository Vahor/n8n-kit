// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Toggl/TogglTrigger.node.ts' node

export const name = "togglTrigger" as const;
export const description = "Starts the workflow when Toggl events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Toggl Trigger"} as const;
export const credentials = [{"name":"togglApi","required":true}] as const

/**
 * Starts the workflow when Toggl events occur
 */
export interface TogglTriggerNodeParameters {

    /**
     * Default: "newTimeEntry"
     */
    readonly event: "newTimeEntry";


}

