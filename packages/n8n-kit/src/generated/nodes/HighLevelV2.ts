// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HighLevel/v2/HighLevelV2.node.ts' node

export const description = "Consume HighLevel API v2" as const;
export const type = "n8n-nodes-base.highLevel" as const;
export const version = 2 as const;
export const credentials = [{"name":"highLevelOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface HighLevelV2NodeParameters {
    /** Default: "contact" */
    readonly resource?: "contact" | "opportunity" | "task" | "calendar";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "bookAppointment" | "getFreeSlots";

    /** Email or Phone are required to create contact */
    readonly email?: string;

    /** Phone or Email are required to create contact. Phone number has to start with a valid <a href="https://en.wikipedia.org/wiki/List_of_country_calling_codes">country code</a> leading with + sign. */
    readonly phone?: string;

    /** Default: {} */
    readonly additionalFields?: { address1?: string, city?: string, customFields?: { values: Array<{ fieldId: {
	value: string,
	mode: "list" | "id",
}, fieldValue?: string }> }, dnd?: boolean, firstName?: string, lastName?: string, name?: string, postalCode?: string, source?: string, state?: string, notes?: string, tags?: string, timezone?: {
	value: string,
	mode: "list" | "id",
}, website?: string } | { assignedTo?: string, companyName?: string, monetaryValue?: number, tags?: string, stageId?: string } | { assignedTo?: string, body?: string } | { endTime?: string, title?: string, appointmentStatus?: "cancelled" | "confirmed" | "invalid" | "new" | "noshow" | "showed", assignedUserId?: string, address?: string, ignoreDateRange?: boolean, toNotify?: boolean } | { timezone?: string, userId?: string, userIds?: { userIds?: string }, enableLookBusy?: boolean };

    readonly contactId?: string;

    /** Default: {} */
    readonly updateFields?: { address1?: string, city?: string, customFields?: { values: Array<{ fieldId: {
	value: string,
	mode: "list" | "id",
}, fieldValue?: string }> }, dnd?: boolean, email?: string, firstName?: string, lastName?: string, name?: string, phone?: string, postalCode?: string, state?: string, tags?: string, timezone?: {
	value: string,
	mode: "list" | "id",
}, website?: string } | { assignedTo?: string, monetaryValue?: number, name?: string, pipelineId?: string, stageId?: string, status?: "open" | "won" | "lost" | "abandoned" } | { assignedTo?: string, completed?: boolean, body?: string, dueDate?: string, title?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { query?: string } | { assignedTo?: string, campaignId?: string, endDate?: string, pipelineId?: string, stageId?: string, startDate?: string, status?: "open" | "won" | "lost" | "abandoned", query?: string };

    /** Default: {} */
    readonly options?: { order?: "desc" | "asc", sortBy?: "date_added" | "date_updated" };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getPipelines"}
     */
    readonly pipelineId?: string;

    readonly name?: string;

    /** Default: "open" */
    readonly status?: "open" | "won" | "lost" | "abandoned";

    readonly opportunityId?: string;

    readonly title?: string;

    readonly dueDate?: string;

    readonly completed?: boolean;

    readonly taskId?: string;

    readonly calendarId?: string;

    readonly locationId?: string;

    /** Example: 2021-06-23T03:30:00+05:30 */
    readonly startTime?: string;

    /** The start date for fetching free calendar slots. Example: 1548898600000. */
    readonly startDate?: number;

    /** The end date for fetching free calendar slots. Example: 1601490599999. */
    readonly endDate?: number;

}
