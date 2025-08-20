// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Zoom/Zoom.node.ts' node

export const name = "zoom" as const;
export const description = "Consume Zoom API" as const;
export const version = 1 as const;
export const defaults = {"name":"Zoom"} as const;
export const credentials = [{"name":"zoomApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"zoomOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume Zoom API
 */
export interface ZoomNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "meeting"
     */
    readonly resource?: "meeting";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Topic of the meeting
     */
    readonly topic?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "agenda"?: string, "duration"?: number, "password"?: string, "scheduleFor"?: string, "settings"?: { "audio"?: "both" | "telephony" | "voip", "alternativeHosts"?: string, "autoRecording"?: "local" | "cloud" | "none", "cnMeeting"?: boolean, "inMeeting"?: boolean, "hostVideo"?: boolean, "joinBeforeHost"?: boolean, "muteUponEntry"?: boolean, "participantVideo"?: boolean, "registrationType"?: "1" | "2" | "3", "watermark"?: boolean }, "startTime"?: string, "timeZone"?: string, "type"?: "1" | "2" | "3" | "8", "occurrenceId"?: string, "showPreviousOccurrences"?: boolean, "scheduleForReminder"?: boolean };

    /**
     * Meeting ID
     */
    readonly meetingId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 30
     * Type options: {"minValue":1,"maxValue":300}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "type"?: "scheduled" | "live" | "upcoming" };

    /**
     * Default: {}
     */
    readonly updateFields?: { "agenda"?: string, "duration"?: number, "password"?: string, "scheduleFor"?: string, "settings"?: { "audio"?: "both" | "telephony" | "voip", "alternativeHosts"?: string, "autoRecording"?: "local" | "cloud" | "none", "cnMeeting"?: boolean, "inMeeting"?: boolean, "hostVideo"?: boolean, "joinBeforeHost"?: boolean, "muteUponEntry"?: boolean, "participantVideo"?: boolean, "registrationType"?: "1" | "2" | "3", "watermark"?: boolean }, "startTime"?: string, "timeZone"?: string, "topic"?: string, "type"?: "1" | "2" | "3" | "8" };


}

