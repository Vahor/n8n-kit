// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/SyncroMSP/v1/SyncroMspV1.node.ts' node

export const name = "syncroMsp" as const;
export const description = "Gets data from SyncroMSP" as const;
export const version = 1 as const;
export const defaults = {"name":"SyncroMSP"} as const;
export const credentials = [{"name":"syncroMspApi","required":true,"testedBy":"syncroMspApiCredentialTest"}] as const

/**
 * Gets data from SyncroMSP
 */
export interface SyncroMspV1NodeParameters {

    /**
     * Default: "contact"
     */
    readonly resource?: "contact" | "customer" | "rmm" | "ticket";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "mute";

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 25
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "businessName"?: string, "email"?: string, "firstName"?: string, "includeDisabled"?: boolean, "lastname"?: string, "query"?: string, "sort"?: string, "status"?: "Customer Reply" | "In Progress" | "New" | "Resolved" | "Scheduled" | "Waiting for Parts" | "Waiting on Customer" };

    /**
     * Get specific customer by ID
     */
    readonly customerId?: string;

    /**
     */
    readonly email?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "undefined"?: any, "businessName"?: string, "firstName"?: string, "getSms"?: boolean, "invoiceCcEmails"?: string, "lastname"?: string, "noEmail"?: boolean, "notes"?: string, "notificationEmail"?: string, "phone"?: string, "referredBy"?: string, "assetId"?: string, "contactId"?: string, "issueType"?: "Contract Work" | "Network Project" | "Other" | "Regular Maintenance" | "Remote Support", "status"?: "Customer Reply" | "In Progress" | "New" | "Resolved" | "Scheduled" | "Waiting for Parts" | "Waiting on Customer", "name"?: string, "resolved"?: boolean };

    /**
     * Default: {}
     */
    readonly updateFields?: { "undefined"?: any, "businessName"?: string, "email"?: string, "firstName"?: string, "getSms"?: boolean, "invoiceCcEmails"?: string, "lastName"?: string, "noEmail"?: boolean, "notes"?: string, "notificationEmail"?: string, "phone"?: string, "referredBy"?: string, "assetId"?: string, "contactId"?: string, "customerId"?: string, "dueDate"?: string, "issueType"?: "Contract Work" | "Network Project" | "Other" | "Regular Maintenance" | "Remote Support", "status"?: "Customer Reply" | "In Progress" | "New" | "Resolved" | "Scheduled" | "Waiting for Parts" | "Waiting on Customer", "subject"?: string, "name"?: string };

    /**
     */
    readonly subject?: string;

    /**
     * Get specific customer by ID
     */
    readonly ticketId?: string;

    /**
     * Get specific contact by ID
     */
    readonly contactId?: string;

    /**
     * Get specific RMM alert by ID
     */
    readonly alertId?: string;

    /**
     */
    readonly assetId?: string;

    /**
     */
    readonly description?: string;

    /**
     * Length of time to mute alert for
     */
    readonly muteFor?: "1-hour" | "1-day" | "2-days" | "1-week" | "2-weeks" | "1-month" | "forever";


}

