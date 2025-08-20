// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Calendar/GoogleCalendar.node.ts' node

export const name = "googleCalendar" as const;
export const description = "Consume Google Calendar API" as const;
export const version = 1.3 as const;
export const defaults = {"name":"Google Calendar"} as const;
export const credentials = [{"name":"googleCalendarOAuth2Api","required":true}] as const

/**
 * Consume Google Calendar API
 */
export interface GoogleCalendarNodeParameters {

    /**
     * Default: "event"
     */
    readonly resource?: "calendar" | "event";

    /**
     * Default: "availability"
     */
    readonly operation?: "availability" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Google Calendar to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly calendar?: any;

    /**
     * Start of the interval
     */
    readonly timeMin?: any;

    /**
     * End of the interval
     */
    readonly timeMax?: any;

    /**
     * Default: {}
     */
    readonly options?: { "outputFormat"?: "availability" | "bookedSlots" | "raw", "timezone"?: any, "sendUpdates"?: "all" | "externalOnly" | "none", "maxAttendees"?: number, "returnNextInstance"?: boolean, "timeZone"?: any, "timeMin"?: any, "timeMax"?: any, "singleEvents"?: boolean, "fields"?: string, "iCalUID"?: string, "orderBy"?: "startTime" | "updated", "query"?: string, "recurringEventHandling"?: "expand" | "first" | "next", "showDeleted"?: boolean, "showHiddenInvitations"?: boolean, "updatedMin"?: any };

    /**
     * Start time of the event
     */
    readonly start?: any;

    /**
     * End time of the event
     */
    readonly end?: any;

    /**
     * Default: true
     */
    readonly useDefaultReminders?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "allday"?: "yes" | "no", "attendees"?: string, "color"?: string, "conferenceDataUi"?: { "conferenceDataValues": any }, "description"?: string, "guestsCanInviteOthers"?: boolean, "guestsCanModify"?: boolean, "guestsCanSeeOtherGuests"?: boolean, "id"?: string, "location"?: string, "maxAttendees"?: number, "repeatFrecuency"?: "Daily" | "weekly" | "monthly" | "yearly", "repeatHowManyTimes"?: number, "repeatUntil"?: any, "rrule"?: string, "sendUpdates"?: "all" | "externalOnly" | "none", "showMeAs"?: "transparent" | "opaque", "summary"?: string, "visibility"?: "confidential" | "default" | "private" | "public" };

    /**
     * If the event doesn't use the default reminders, this lists the reminders specific to the event
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly remindersUi?: { "remindersValues": any };

    /**
     */
    readonly eventId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: "instance"
     */
    readonly modifyTarget?: "instance" | "event";

    /**
     * Default: {}
     */
    readonly updateFields?: { "allday"?: "yes" | "no", "attendeesUi"?: { "values": any }, "attendees"?: string, "color"?: string, "description"?: string, "end"?: any, "guestsCanInviteOthers"?: boolean, "guestsCanModify"?: boolean, "guestsCanSeeOtherGuests"?: boolean, "id"?: string, "location"?: string, "maxAttendees"?: number, "repeatFrecuency"?: "Daily" | "weekly" | "monthly" | "yearly", "repeatHowManyTimes"?: number, "repeatUntil"?: any, "rrule"?: string, "sendUpdates"?: "all" | "externalOnly" | "none", "showMeAs"?: "transparent" | "opaque", "start"?: any, "summary"?: string, "visibility"?: "confidential" | "default" | "public" | "private" };

    /**
     */
    readonly useN8nTimeZone?: string;


}

