// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ICalendar/ICalendar.node.ts' node

export const name = "iCal" as const;
export const description = "Create iCalendar file" as const;
export const version = 1 as const;
export const defaults = {"name":"iCalendar","color":"#408000"} as const;
export const credentials = [] as const

/**
 * Create iCalendar file
 */
export interface ICalendarNodeParameters {

    /**
     * Default: "createEventFile"
     */
    readonly operation?: "createEventFile";


}

