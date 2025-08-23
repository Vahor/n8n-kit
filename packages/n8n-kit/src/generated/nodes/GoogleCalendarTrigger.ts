// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Calendar/GoogleCalendarTrigger.node.ts' node

export const description = "Starts the workflow when Google Calendar events occur" as const;
export const type = "n8n-nodes-base.googleCalendarTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleCalendarOAuth2Api","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleCalendarTriggerNodeParameters {
    /**
     * Google Calendar to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly calendarId?: {
	value: string,
	mode: "list" | "id",
};

    readonly triggerOn?: "eventCancelled" | "eventCreated" | "eventEnded" | "eventStarted" | "eventUpdated";

    /**
     * Default: {}
     */
    readonly options?: { "matchTerm"?: string };

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
