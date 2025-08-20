// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Onfleet/Onfleet.node.ts' node

export const name = "onfleet" as const;
export const description = "Consume Onfleet API" as const;
export const version = 1 as const;
export const defaults = {"name":"Onfleet"} as const;
export const credentials = [{"name":"onfleetApi","required":true,"testedBy":"onfleetApiTest"}] as const

/**
 * Consume Onfleet API
 */
export interface OnfleetNodeParameters {

    /**
     * The resource to perform operations on
     * Default: "task"
     */
    readonly resource?: "admin" | "container" | "destination" | "hub" | "organization" | "recipient" | "task" | "team" | "worker";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "getAll" | "update" | "addTask" | "get" | "updateTask" | "get" | "getDelegatee" | "clone" | "complete" | "autoDispatch" | "getTimeEstimates" | "getSchedule";

    /**
     * The ID of the admin object for lookup
     */
    readonly id?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 64
     * Type options: {"minValue":1,"maxValue":64}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "undefined"?: any, "undefined"?: any, "notes"?: string, "recipientName"?: string, "recipientNotes"?: string, "recipientSkipSMSNotifications"?: boolean, "useMerchantForProxy"?: boolean, "endingRoute"?: { "endingRouteProperties": any }, "scheduleTimeWindow"?: { "scheduleTimeWindowProperties": any }, "taskTimeWindow"?: { "taskTimeWindowProperties": any }, "vehicle"?: { "vehicleProperties": any } };

    /**
     * Default: {}
     */
    readonly updateFields?: { "undefined"?: any, "undefined"?: any, "undefined"?: any };

    /**
     * Default: {}
     */
    readonly options?: { "undefined"?: any, "recipientSkipPhoneNumberValidation"?: boolean, "analytics"?: boolean };

    /**
     * The variable that is used for looking up a recipient
     * Default: "id"
     */
    readonly getBy?: "id" | "phone" | "name";

    /**
     * The name of the recipient for lookup
     */
    readonly name?: string;

    /**
     * The phone of the recipient for lookup
     */
    readonly phone?: string;

    /**
     * Whether the task's completion was successful
     * Default: true
     */
    readonly success?: boolean;

    /**
     * Default: {}
     */
    readonly filters?: { "from"?: string, "state"?: ("all" | "2" | "1" | "3" | "0")[], "to"?: string, "dropOff"?: { "dropOffProperties": any }, "pickUp"?: { "pickUpProperties": any }, "undefined"?: any };

    /**
     * Default: {}
     */
    readonly overrideFields?: { "undefined"?: any, "undefined"?: any, "includeBarcodes"?: boolean, "includeDependencies"?: boolean, "includeMetadata"?: boolean, "undefined"?: any, "undefined"?: any, "undefined"?: any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Schedule"}
     */
    readonly schedule?: { "scheduleProperties": any };


}

