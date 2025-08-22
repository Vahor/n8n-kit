// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Calendar/GoogleCalendar.node.ts' node

export const name = "googleCalendar" as const;
export const description = "Consume Google Calendar API" as const;
export const version = 1.3 as const;

/**
 * Consume Google Calendar API
 */
export interface GoogleCalendarNodeParameters {

    /**
     * Type options: {"calloutAction":{"label":"Voice assistant agent","icon":"bot","type":"openSampleWorkflowTemplate","templateId":"voice_assistant_agent_with_telegram_and_gcal"}}
     */
    readonly preBuiltAgentsCalloutGoogleCalendar?: any;

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
    readonly calendar?: any | any;

    /**
     * Start of the interval
     */
    readonly timeMin?: string | string | string;

    /**
     * End of the interval
     */
    readonly timeMax?: string | string | string;

    /**
     * Default: {}
     */
    readonly options?: { "outputFormat"?: "availability" | "bookedSlots" | "raw", "timezone"?: any } | { "sendUpdates"?: "all" | "externalOnly" | "none" } | { "maxAttendees"?: number, "returnNextInstance"?: boolean, "timeZone"?: any } | { "timeMin"?: string, "timeMax"?: string, "singleEvents"?: boolean, "fields"?: string, "iCalUID"?: string, "maxAttendees"?: number, "orderBy"?: "startTime" | "updated", "query"?: string, "recurringEventHandling"?: "expand" | "first" | "next", "showDeleted"?: boolean, "showHiddenInvitations"?: boolean, "timeZone"?: any, "updatedMin"?: string };

    /**
     * Start time of the event
     */
    readonly start?: string | string;

    /**
     * End time of the event
     */
    readonly end?: string | string;

    /**
     * Default: true
     */
    readonly useDefaultReminders?: boolean | boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "allday"?: "yes" | "no", "attendees"?: string, "color"?: string, "conferenceDataUi"?: { "conferenceDataValues": any }, "description"?: string, "guestsCanInviteOthers"?: boolean, "guestsCanModify"?: boolean, "guestsCanSeeOtherGuests"?: boolean, "id"?: string, "location"?: string, "maxAttendees"?: number, "repeatFrecuency"?: "Daily" | "weekly" | "monthly" | "yearly", "repeatHowManyTimes"?: number, "repeatUntil"?: string, "rrule"?: string, "sendUpdates"?: "all" | "externalOnly" | "none", "showMeAs"?: "transparent" | "opaque", "summary"?: string, "visibility"?: "confidential" | "default" | "private" | "public" };

    /**
     * If the event doesn't use the default reminders, this lists the reminders specific to the event
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly remindersUi?: { "remindersValues": any } | { "remindersValues": any };

    /**
     */
    readonly eventId?: string | string | string;

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
    readonly updateFields?: { "allday"?: "yes" | "no", "attendeesUi"?: { "values": any }, "attendees"?: string, "color"?: string, "description"?: string, "end"?: string, "guestsCanInviteOthers"?: boolean, "guestsCanModify"?: boolean, "guestsCanSeeOtherGuests"?: boolean, "id"?: string, "location"?: string, "maxAttendees"?: number, "repeatFrecuency"?: "Daily" | "weekly" | "monthly" | "yearly", "repeatHowManyTimes"?: number, "repeatUntil"?: string, "rrule"?: string, "sendUpdates"?: "all" | "externalOnly" | "none", "showMeAs"?: "transparent" | "opaque", "start"?: string, "summary"?: string, "visibility"?: "confidential" | "default" | "public" | "private" };

    /**
     */
    readonly useN8nTimeZone?: string;


}

