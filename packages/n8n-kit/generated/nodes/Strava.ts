// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Strava/Strava.node.ts' node

export const name = "strava" as const;
export const description = "Consume Strava API" as const;
export const version = 1.1 as const;
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


}

