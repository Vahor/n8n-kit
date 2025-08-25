// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Calendar/GoogleCalendar.node.ts' node

export const description = "Consume Google Calendar API" as const;
export const type = "n8n-nodes-base.googleCalendar" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"googleCalendarOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleCalendarNodeParameters {
    /** Default: "event" */
    readonly resource?: "calendar" | "event";

    /** Default: "availability" */
    readonly operation?: "availability" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Google Calendar to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly calendar?: {
	value: string,
	mode: "list" | "id",
};

    /** Start of the interval */
    readonly timeMin?: string;

    /** End of the interval */
    readonly timeMax?: string;

    /** Default: {} */
    readonly options?: { outputFormat?: "availability" | "bookedSlots" | "raw", timezone?: {
	value: string,
	mode: "list" | "id",
} } | { sendUpdates?: "all" | "externalOnly" | "none" } | { maxAttendees?: number, returnNextInstance?: boolean, timeZone?: {
	value: string,
	mode: "list" | "id",
} } | { timeMin?: string, timeMax?: string, singleEvents?: boolean, fields?: string, iCalUID?: string, maxAttendees?: number, orderBy?: "startTime" | "updated", query?: string, recurringEventHandling?: "expand" | "first" | "next", showDeleted?: boolean, showHiddenInvitations?: boolean, timeZone?: {
	value: string,
	mode: "list" | "id",
}, updatedMin?: string };

    /** Start time of the event */
    readonly start?: string;

    /** End time of the event */
    readonly end?: string;

    /** Default: true */
    readonly useDefaultReminders?: boolean;

    /** Default: {} */
    readonly additionalFields?: { allday?: "yes" | "no", attendees?: string, color?: string, conferenceDataUi?: { conferenceDataValues: { conferenceSolution?: string } }, description?: string, guestsCanInviteOthers?: boolean, guestsCanModify?: boolean, guestsCanSeeOtherGuests?: boolean, id?: string, location?: string, maxAttendees?: number, repeatFrecuency?: "Daily" | "weekly" | "monthly" | "yearly", repeatHowManyTimes?: number, repeatUntil?: string, rrule?: string, sendUpdates?: "all" | "externalOnly" | "none", showMeAs?: "transparent" | "opaque", summary?: string, visibility?: "confidential" | "default" | "private" | "public" };

    /**
     * If the event doesn't use the default reminders, this lists the reminders specific to the event
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly remindersUi?: { remindersValues: { method?: "email" | "popup", minutes?: number } };

    readonly eventId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /** Default: "instance" */
    readonly modifyTarget?: "instance" | "event";

    /** Default: {} */
    readonly updateFields?: { allday?: "yes" | "no", attendeesUi?: { values: { mode?: "add" | "replace", attendees?: string } }, attendees?: string, color?: string, description?: string, end?: string, guestsCanInviteOthers?: boolean, guestsCanModify?: boolean, guestsCanSeeOtherGuests?: boolean, id?: string, location?: string, maxAttendees?: number, repeatFrecuency?: "Daily" | "weekly" | "monthly" | "yearly", repeatHowManyTimes?: number, repeatUntil?: string, rrule?: string, sendUpdates?: "all" | "externalOnly" | "none", showMeAs?: "transparent" | "opaque", start?: string, summary?: string, visibility?: "confidential" | "default" | "public" | "private" };

}
