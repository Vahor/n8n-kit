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
     */
    readonly useN8nTimeZone?: string;


}

