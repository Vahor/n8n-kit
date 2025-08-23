// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Flow/Flow.node.ts' node

export const description = "Consume Flow API" as const;
export const type = "n8n-nodes-base.flow" as const;
export const version = 1 as const;
export const credentials = [{"name":"flowApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface FlowNodeParameters {
    /**
     * Default: "task"
     */
    readonly resource?: "task";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "update" | "get" | "getAll";

    /**
     * Create resources under the given workspace
     */
    readonly workspaceId?: string;

    /**
     * The title of the task
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "ownerid"?: string, "listID"?: string, "startsOn"?: string, "dueOn"?: string, "mirrorParentSubscribers"?: boolean, "mirrorParentTags"?: boolean, "noteContent"?: string, "noteMimeType"?: "text/plain" | "text/x-markdown" | "text/html", "parentId"?: string, "positionList"?: number, "positionUpcoming"?: number, "position"?: number, "sectionId"?: string, "tags"?: string };

    readonly taskId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "name"?: string, "completed"?: boolean, "ownerid"?: string, "listID"?: string, "startsOn"?: string, "dueOn"?: string, "mirrorParentSubscribers"?: boolean, "mirrorParentTags"?: boolean, "noteContent"?: string, "noteMimeType"?: "text/plain" | "text/x-markdown" | "text/html", "parentId"?: string, "positionList"?: number, "positionUpcoming"?: number, "position"?: number, "sectionId"?: string, "tags"?: string };

    /**
     * Default: {}
     */
    readonly filters?: { "include"?: ("schedule" | "files" | "file_associations" | "parent")[] } | { "include"?: ("schedule" | "files" | "file_associations" | "parent")[], "order"?: "account_id" | "completed_at" | "created_at" | "due_on" | "list_id" | "name" | "owner_id" | "position" | "section_id" | "starts_on" | "updated_at", "workspaceId"?: string, "createdBefore"?: string, "createdAfter"?: string, "updateBefore"?: string, "updateAfter"?: string, "deleted"?: boolean, "cleared"?: boolean };

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

}
