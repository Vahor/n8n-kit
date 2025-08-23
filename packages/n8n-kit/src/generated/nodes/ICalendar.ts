// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ICalendar/ICalendar.node.ts' node

export const description = "Create iCalendar file" as const;
export const type = "n8n-nodes-base.iCal" as const;
export const version = 1 as const;
export const credentials = [] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ICalendarNodeParameters {
    /**
     * Default: "createEventFile"
     */
    readonly operation?: "createEventFile";

    readonly title?: string;

    /**
     * Date and time at which the event begins. (For all-day events, the time will be ignored.).
     */
    readonly start?: string;

    /**
     * Date and time at which the event ends. (For all-day events, the time will be ignored.).
     */
    readonly end?: string;

    /**
     * Whether the event lasts all day or not
     */
    readonly allDay?: boolean;

    /**
     * The field that your iCalendar file will be available under in the output
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "attendeesUi"?: { "attendeeValues": any }, "busyStatus"?: "BUSY" | "TENTATIVE", "calName"?: string, "description"?: string, "fileName"?: string, "geolocationUi"?: { "geolocationValues": any }, "location"?: string, "recurrenceRule"?: string, "organizerUi"?: { "organizerValues": any }, "sequence"?: number, "status"?: "CONFIRMED" | "CANCELLED" | "TENTATIVE", "uid"?: string, "url"?: string, "useWorkflowTimezone"?: boolean };

}
