// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Onfleet/Onfleet.node.ts' node

export const description = "Consume Onfleet API" as const;
export const type = "n8n-nodes-base.onfleet" as const;
export const version = 1 as const;
export const credentials = [{"name":"onfleetApi","required":true,"testedBy":"onfleetApiTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface OnfleetNodeParameters {
    /**
     * The resource to perform operations on
     * Default: "task"
     */
    readonly resource?: "admin" | "container" | "destination" | "hub" | "organization" | "recipient" | "task" | "team" | "worker";

    /** Default: "getAll" */
    readonly operation?: "create" | "delete" | "getAll" | "update" | "addTask" | "get" | "updateTask" | "create" | "get" | "create" | "getAll" | "update" | "get" | "getDelegatee" | "create" | "get" | "update" | "clone" | "complete" | "create" | "delete" | "get" | "getAll" | "update" | "autoDispatch" | "create" | "delete" | "get" | "getAll" | "getTimeEstimates" | "update" | "create" | "delete" | "get" | "getAll" | "getSchedule" | "update";

    /** The ID of the admin object for lookup */
    readonly id?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 64
     * Type options: {"minValue":1,"maxValue":64}
     */
    readonly limit?: number;

    /** The administrator's name */
    readonly name?: string;

    /** The administrator's email address */
    readonly email?: string;

    /** Default: {} */
    readonly additionalFields?: { phone?: string, isReadOnly?: boolean } | { addressApartment?: string, addressName?: string, addressNotes?: string } | { addressApartment?: string, addressName?: string, addressNotes?: string, addressPostalCode?: string } | { teams?: any[] } | { recipientNotes?: string, recipientSkipSMSNotifications?: boolean } | { notes?: string } | { completeAfter?: string, completeBefore?: string, executor?: string, merchant?: string, notes?: string, pickupTask?: boolean, quantity?: number, recipient?: { recipientProperties: { recipientName: string, recipientPhone: string, recipientNotes?: string, recipientSkipSMSNotifications?: boolean } }, recipientName?: string, recipientNotes?: string, recipientSkipSMSNotifications?: boolean, serviceTime?: number, useMerchantForProxy?: boolean } | { hub?: string, enableSelfAssignment?: boolean } | { endingRoute?: { endingRouteProperties: { routeEnd: "team_hub" | "worker_routing_address" | "hub" | "anywhere", hub?: string } }, maxAllowedDelay?: number, maxTasksPerRoute?: number, scheduleTimeWindow?: { scheduleTimeWindowProperties: { startTime?: string, endTime?: string } }, serviceTime?: number, taskTimeWindow?: { taskTimeWindowProperties: { startTime?: string, endTime?: string } } } | { capacity?: number, displayName?: string, vehicle?: { vehicleProperties: { type: "BICYCLE" | "CAR" | "MOTORCYCLE" | "TRUCK", description?: string, licensePlate?: string, color?: string } } };

    /** Default: {} */
    readonly updateFields?: { name?: string, phone?: string, isReadOnly?: boolean } | { destination?: { destinationProperties: { unparsed?: boolean, address: string, addressNumber: string, addressStreet: string, addressCity: string, addressState: string, addressCountry: string, addressPostalCode?: string, addressName?: string, addressApartment?: string, addressNotes?: string } }, name?: string, teams?: any[] } | { recipientName?: string, notes?: string, recipientPhone?: string, skipSMSNotifications?: boolean } | { completeAfter?: string, completeBefore?: string, executor?: string, merchant?: string, notes?: string, pickupTask?: boolean, quantity?: number, serviceTime?: number } | { managers?: any[], hub?: string, name?: string, enableSelfAssignment?: boolean, workers?: any[] } | { capacity?: number, displayName?: string, name?: string, teams?: any[] };

    readonly containerType?: "organizations" | "teams" | "workers";

    /** The object ID according to the container chosen */
    readonly containerId?: string;

    readonly type?: -1 | 0 | 1;

    /** The index given indicates the position where the tasks are going to be inserted */
    readonly index?: number;

    /**
     * Task's ID that are going to be used
     * Default: []
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Task"}
     */
    readonly tasks?: string;

    /** Default: {} */
    readonly options?: { considerDependencies?: boolean } | { recipientSkipPhoneNumberValidation?: boolean } | { filter?: ("accountStatus" | "activeTask" | "capacity" | "delayTime" | "displayName" | "imageUrl" | "location" | "metadata" | "name" | "onDuty" | "organization" | "phone" | "tasks" | "teams" | "timeCreated" | "timeLastModified" | "timeLastSeen" | "userData" | "vehicle" | "id")[] } | { analytics?: boolean, filter?: ("accountStatus" | "activeTask" | "capacity" | "delayTime" | "displayName" | "imageUrl" | "location" | "metadata" | "name" | "onDuty" | "organization" | "phone" | "tasks" | "teams" | "timeCreated" | "timeLastModified" | "timeLastSeen" | "userData" | "vehicle" | "id")[] };

    /** Whether or not the address is specified in a single unparsed string */
    readonly unparsed?: boolean;

    /** The destination's street address details */
    readonly address?: string;

    /** The number component of this address, it may also contain letters */
    readonly addressNumber?: string;

    /** The name of the street */
    readonly addressStreet?: string;

    /** The name of the municipality */
    readonly addressCity?: string;

    /** The name of the country */
    readonly addressCountry?: string;

    /** Default: {} */
    readonly destination?: { destinationProperties: { unparsed?: boolean, address: string, addressNumber: string, addressStreet: string, addressCity: string, addressState: string, addressCountry: string, addressPostalCode?: string, addressName?: string, addressApartment?: string, addressNotes?: string } };

    /**
     * The variable that is used for looking up a recipient
     * Default: "id"
     */
    readonly getBy?: "id" | "phone" | "name";

    /** The phone of the recipient for lookup */
    readonly phone?: string;

    /** The recipient's complete name */
    readonly recipientName?: string;

    /** A unique, valid phone number as per the organization's country if there's no leading + sign. If a phone number has a leading + sign, it will disregard the organization's country setting. */
    readonly recipientPhone?: string;

    /**
     * Whether the task's completion was successful
     * Default: true
     */
    readonly success?: boolean;

    /** Default: {} */
    readonly filters?: { from?: string, state?: ("all" | "2" | "1" | "3" | "0")[], to?: string } | { dropOff?: { dropOffProperties: { dropOffLongitude: number, dropOffLatitude: number } }, pickUp?: { pickUpProperties: { pickupLongitude: number, pickupLatitude: number, pickupTime?: string } }, restrictedVehicleTypes?: "CAR" | "MOTORCYCLE" | "BICYCLE" | "TRUCK", serviceTime?: number } | { radius?: number } | { states?: ("2" | "1" | "0")[], teams?: any[], phones?: string };

    /** Default: {} */
    readonly overrideFields?: { completeAfter?: string, completeBefore?: string, includeBarcodes?: boolean, includeDependencies?: boolean, includeMetadata?: boolean, notes?: string, pickupTask?: boolean, serviceTime?: number };

    /**
     * A list of workers. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getWorkers"}
     */
    readonly workers?: any[];

    /**
     * A list of managing administrators. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getAdmins"}
     */
    readonly managers?: any[];

    /** Whether to search for only those workers who are currently within a certain target area */
    readonly byLocation?: boolean;

    /**
     * One or more teams of which the worker is a member. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getTeams"}
     */
    readonly teams?: any[];

    /**
     * The longitude component of the coordinate pair
     * Type options: {"numberPrecision":14}
     */
    readonly longitude?: number;

    /**
     * The latitude component of the coordinate pair
     * Type options: {"numberPrecision":14}
     */
    readonly latitude?: number;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Schedule"}
     */
    readonly schedule?: { scheduleProperties: { date: string, timezone: string, shifts?: { shiftsProperties: { start: string, end: string } } } };

}
