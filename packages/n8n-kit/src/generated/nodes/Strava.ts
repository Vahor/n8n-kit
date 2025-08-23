// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Strava/Strava.node.ts' node

export const name = "strava" as const;
export const description = "Consume Strava API" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"stravaOAuth2Api","required":true}] as const;

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
     * Type of sport
     * Default: "Run"
     */
    readonly sport_type?: "AlpineSki" | "BackcountrySki" | "Badminton" | "Canoeing" | "Crossfit" | "EBikeRide" | "Elliptical" | "EMountainBikeRide" | "Golf" | "GravelRide" | "Handcycle" | "HighIntensityIntervalTraining" | "Hike" | "IceSkate" | "InlineSkate" | "Kayaking" | "Kitesurf" | "MountainBikeRide" | "NordicSki" | "Pickleball" | "Pilates" | "Racquetball" | "Ride" | "RockClimbing" | "RollerSki" | "Rowing" | "Run" | "Sail" | "Skateboard" | "Snowboard" | "Snowshoe" | "Soccer" | "Squash" | "StairStepper" | "StandUpPaddling" | "Surfing" | "Swim" | "TableTennis" | "Tennis" | "TrailRun" | "Velomobile" | "VirtualRide" | "VirtualRow" | "VirtualRun" | "Walk" | "WeightTraining" | "Wheelchair" | "Windsurf" | "Workout" | "Yoga";

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
    readonly updateFields?: { "commute"?: boolean, "description"?: string, "gear_id"?: string, "hide_from_home"?: boolean, "name"?: string, "type"?: string, "sport_type"?: "AlpineSki" | "BackcountrySki" | "Badminton" | "Canoeing" | "Crossfit" | "EBikeRide" | "Elliptical" | "EMountainBikeRide" | "Golf" | "GravelRide" | "Handcycle" | "HighIntensityIntervalTraining" | "Hike" | "IceSkate" | "InlineSkate" | "Kayaking" | "Kitesurf" | "MountainBikeRide" | "NordicSki" | "Pickleball" | "Pilates" | "Racquetball" | "Ride" | "RockClimbing" | "RollerSki" | "Rowing" | "Run" | "Sail" | "Skateboard" | "Snowboard" | "Snowshoe" | "Soccer" | "Squash" | "StairStepper" | "StandUpPaddling" | "Surfing" | "Swim" | "TableTennis" | "Tennis" | "TrailRun" | "Velomobile" | "VirtualRide" | "VirtualRow" | "VirtualRun" | "Walk" | "WeightTraining" | "Wheelchair" | "Windsurf" | "Workout" | "Yoga", "trainer"?: boolean };

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

