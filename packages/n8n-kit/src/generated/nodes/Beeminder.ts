// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Beeminder/Beeminder.node.ts' node

export const name = "beeminder" as const;
export const description = "Consume Beeminder API" as const;
export const version = 1 as const;
export const credentials = [{"name":"beeminderApi","required":true,"displayOptions":{"show":{"authentication":["apiToken"]}}},{"name":"beeminderOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;

/**
 * Consume Beeminder API
 */
export interface BeeminderNodeParameters {

    /**
     * Default: "apiToken"
     */
    readonly authentication?: "apiToken" | "oAuth2";

    /**
     * Default: "datapoint"
     */
    readonly resource: "charge" | "datapoint" | "goal" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "create" | "createAll" | "delete" | "get" | "getAll" | "update" | "create" | "get" | "getAll" | "getArchived" | "update" | "refresh" | "shortCircuit" | "stepDown" | "cancelStepDown" | "uncle" | "get";

    /**
     * The name of the goal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getGoals"}
     */
    readonly goalName?: string;

    /**
     * Charge amount in USD
     */
    readonly amount?: number;

    /**
     * Array of datapoint objects to create. Each object should contain value and optionally timestamp, comment, etc.
     * Default: "[]"
     */
    readonly datapoints?: string;

    /**
     * Unique identifier for the goal
     */
    readonly slug?: string;

    /**
     * Human-readable title for the goal
     */
    readonly title?: string;

    /**
     * Type of goal. <a href="https://api.beeminder.com/#attributes-2">More info here.</a>.
     * Default: "hustler"
     */
    readonly goal_type?: "hustler" | "biker" | "fatloser" | "gainer" | "inboxer" | "drinker" | "custom";

    /**
     * Units for the goal (e.g., "hours", "pages", "pounds")
     */
    readonly gunits?: string;

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
     * Datapoint value to send
     * Default: 1
     */
    readonly value?: number;

    readonly datapointId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "comment"?: string, "timestamp"?: string, "requestid"?: string } | { "note"?: string, "dryrun"?: boolean } | { "goaldate"?: string, "goalval"?: number, "rate"?: number, "initval"?: number, "secret"?: boolean, "datapublic"?: boolean, "datasource"?: "api" | "ifttt" | "zapier" | "manual", "dryrun"?: boolean, "tags"?: string } | { "datapoints"?: boolean, "emaciated"?: boolean } | { "associations"?: boolean, "diff_since"?: string, "skinny"?: boolean, "emaciated"?: boolean, "datapoints_count"?: number } | { "emaciated"?: boolean };

    /**
     * Default: {}
     */
    readonly updateFields?: { "title"?: string, "yaxis"?: string, "tmin"?: string, "tmax"?: string, "secret"?: boolean, "datapublic"?: boolean, "roadall"?: string, "datasource"?: "api" | "ifttt" | "zapier" | "", "tags"?: string } | { "value"?: number, "comment"?: string, "timestamp"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "sort"?: string, "page"?: number, "per"?: number };


}

