// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Strava/StravaTrigger.node.ts' node

export const description = "Starts the workflow when Strava events occur" as const;
export const type = "n8n-nodes-base.stravaTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"stravaOAuth2Api","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface StravaTriggerNodeParameters {
    /** Default: "*" */
    readonly object?: "*" | "activity" | "athlete";

    /** Default: "*" */
    readonly event?: "*" | "create" | "delete" | "update";

    /**
     * By default the webhook-data only contain the Object ID. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /** Default: {} */
    readonly options?: { deleteIfExist?: boolean };

}
