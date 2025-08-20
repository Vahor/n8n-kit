// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Google/Calendar/GoogleCalendar.node.js' node

export const name = "googleCalendar" as const;
export const description = "Consume Google Calendar API" as const;
export const version = 1 as const;
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
    readonly timeMin?: string;

    /**
     * End of the interval
     */
    readonly timeMax?: string;

    /**
     * Default: {}
     */
    readonly options?: { "outputFormat"?: "availability" | "bookedSlots" | "raw", "timezone"?: any, "sendUpdates"?: "all" | "externalOnly" | "none", "maxAttendees"?: number, "timeZone"?: any, "timeMin"?: string, "timeMax"?: string, "iCalUID"?: string, "orderBy"?: "startTime" | "updated", "query"?: string, "showDeleted"?: boolean, "showHiddenInvitations"?: boolean, "singleEvents"?: boolean, "updatedMin"?: string };

    /**
     * Start time of the event
     */
    readonly start?: string;

    /**
     * End time of the event
     */
    readonly end?: string;

    /**
     * Default: true
     */
    readonly useDefaultReminders?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "allday"?: "yes" | "no", "attendees"?: string, "color"?: string, "conferenceDataUi"?: { "conferenceDataValues": any }, "description"?: string, "guestsCanInviteOthers"?: boolean, "guestsCanModify"?: boolean, "guestsCanSeeOtherGuests"?: boolean, "id"?: string, "location"?: string, "maxAttendees"?: number, "repeatFrecuency"?: "Daily" | "weekly" | "monthly" | "yearly", "repeatHowManyTimes"?: number, "repeatUntil"?: string, "rrule"?: string, "sendUpdates"?: "all" | "externalOnly" | "none", "showMeAs"?: "transparent" | "opaque", "summary"?: string, "visibility"?: "confidential" | "default" | "private" | "public" };

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
     * Default: {}
     */
    readonly updateFields?: { "allday"?: "yes" | "no", "attendees"?: string, "color"?: string, "description"?: string, "end"?: string, "guestsCanInviteOthers"?: boolean, "guestsCanModify"?: boolean, "guestsCanSeeOtherGuests"?: boolean, "id"?: string, "location"?: string, "maxAttendees"?: number, "repeatFrecuency"?: "Daily" | "weekly" | "monthly" | "yearly", "repeatHowManyTimes"?: number, "repeatUntil"?: string, "rrule"?: string, "sendUpdates"?: "all" | "externalOnly" | "none", "showMeAs"?: "transparent" | "opaque", "start"?: string, "summary"?: string, "visibility"?: "confidential" | "default" | "public" | "private" };


}

