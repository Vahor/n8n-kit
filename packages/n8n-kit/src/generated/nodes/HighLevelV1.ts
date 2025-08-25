// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HighLevel/v1/HighLevelV1.node.ts' node

export const description = "Consume HighLevel API v1" as const;
export const type = "n8n-nodes-base.highLevel" as const;
export const version = 1 as const;
export const credentials = [{"name":"highLevelApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface HighLevelV1NodeParameters {
    /** Default: "contact" */
    readonly resource?: "contact" | "opportunity" | "task";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "lookup" | "update" | "create" | "delete" | "get" | "getAll" | "update";

    /** Email or Phone are required to create contact */
    readonly email?: string;

    /** Phone or Email are required to create contact. Phone number has to start with a valid <a href="https://en.wikipedia.org/wiki/List_of_country_calling_codes">country code</a> leading with + sign. */
    readonly phone?: string;

    /** Default: {} */
    readonly additionalFields?: { address1?: string, city?: string, customFields?: { values: { fieldId: string, fieldValue?: string } }, dnd?: boolean, firstName?: string, lastName?: string, name?: string, postalCode?: string, source?: string, state?: string, tags?: string, timezone?: string, website?: string } | { assignedTo?: string, companyName?: string, monetaryValue?: number, name?: string, tags?: string } | { assignedTo?: string, description?: string, status?: "incompleted" | "completed" };

    readonly contactId?: string;

    /** Default: {} */
    readonly updateFields?: { address1?: string, city?: string, customFields?: { values: { fieldId: string, fieldValue?: string } }, dnd?: boolean, email?: string, firstName?: string, lastName?: string, name?: string, phone?: string, postalCode?: string, state?: string, tags?: string, timezone?: string, website?: string } | { assignedTo?: string, companyName?: string, contactIdentifier?: string, monetaryValue?: number, name?: string, stageId?: string, status?: "open" | "won" | "lost" | "abandoned", title?: string, tags?: string } | { assignedTo?: string, description?: string, dueDate?: string, status?: "incompleted" | "completed", title?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { query?: string } | { assignedTo?: string, campaignId?: string, endDate?: string, stageId?: string, startDate?: string, status?: "open" | "won" | "lost" | "abandoned", query?: string };

    /** Default: {} */
    readonly options?: { order?: "desc" | "asc", sortBy?: "date_added" | "date_updated" };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptions":{"routing":{"request":{"url":"/pipelines","method":"GET"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"pipelines"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.name}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly pipelineId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["pipelineId"],"loadOptionsMethod":"getPipelineStages"}
     */
    readonly stageId?: string;

    /** Either Email, Phone or Contact ID */
    readonly contactIdentifier?: string;

    readonly title?: string;

    /** Default: "open" */
    readonly status?: "open" | "won" | "lost" | "abandoned";

    readonly opportunityId?: string;

    readonly dueDate?: string;

    readonly taskId?: string;

}
