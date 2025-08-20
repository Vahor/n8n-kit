// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Strava/Strava.node.js' node

export const name = "strava" as const;
export const description = "Consume Strava API" as const;
export const version = 1 as const;
export const defaults = {"name":"Strava"} as const;
export const credentials = [{"name":"stravaOAuth2Api","required":true}] as const

/**
 * Consume Strava API
 */
export interface StravaNodeParameters {

    /**
     * Default: "activity"
     */
    readonly resource?: "activity";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "getComments" | "getKudos" | "getLaps" | "getAll" | "getStreams" | "getZones" | "update";

    /**
     * The name of the activity
     */
    readonly name?: string;

    /**
     * Type of activity. For example - Run, Ride etc.
     */
    readonly type?: string;

    /**
     * ISO 8601 formatted date time
     */
    readonly startDate?: string;

    /**
     * In seconds
     * Type options: {"minValue":0}
     */
    readonly elapsedTime?: number;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "commute"?: boolean, "description"?: string, "distance"?: number, "trainer"?: boolean };

    /**
     * ID or email of activity
     */
    readonly activityId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "commute"?: boolean, "description"?: string, "gear_id"?: string, "hide_from_home"?: boolean, "name"?: string, "type"?: string, "trainer"?: boolean };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Desired stream types to return
     * Default: []
     */
    readonly keys?: ("altitude" | "cadence" | "distance" | "grade_smooth" | "heartrate" | "latlng" | "moving" | "temp" | "time" | "velocity_smooth" | "watts")[];


}

