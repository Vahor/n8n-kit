// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Teams/v1/MicrosoftTeamsV1.node.ts' node

export const name = "microsoftTeams" as const;
export const description = "Consume Microsoft Teams API" as const;
export const version = 1.1 as const;

/**
 * Consume Microsoft Teams API
 */
export interface MicrosoftTeamsV1NodeParameters {

    /**
     */
    readonly oldVersionNotice?: string;

    /**
     * Default: "channel"
     */
    readonly resource?: "channel" | "channelMessage" | "chatMessage" | "task";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "getAll" | "create" | "get" | "getAll";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTeams"}
     */
    readonly teamId?: string;

    /**
     * Channel name as it will appear to the user in Microsoft Teams
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly options?: { "description"?: string, "type"?: "private" | "standard" } | { "includeLinkToWorkflow"?: boolean, "makeReply"?: string } | { "includeLinkToWorkflow"?: boolean };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getChannels","loadOptionsDependsOn":["teamId"]}
     */
    readonly channelId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly updateFields?: { "name"?: string, "description"?: string } | { "assignedTo"?: string, "bucketId"?: string, "dueDateTime"?: string, "groupId"?: string, "labels"?: string[], "percentComplete"?: number, "planId"?: string, "title"?: string };

    /**
     * The type of the content
     * Default: "text"
     */
    readonly messageType?: "text" | "html";

    /**
     * The content of the item
     */
    readonly message?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getChats"}
     */
    readonly chatId?: string;

    /**
     */
    readonly messageId?: string;

    /**
     * Default: "all"
     */
    readonly groupSource?: "all" | "mine";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getGroups","loadOptionsDependsOn":["groupSource"]}
     */
    readonly groupId?: string;

    /**
     * The plan for the task to belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getPlans","loadOptionsDependsOn":["groupId"]}
     */
    readonly planId?: string;

    /**
     * The bucket for the task to belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getBuckets","loadOptionsDependsOn":["planId"]}
     */
    readonly bucketId?: string;

    /**
     * Title of the task
     */
    readonly title?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "assignedTo"?: string, "dueDateTime"?: string, "labels"?: string[], "percentComplete"?: number };

    /**
     */
    readonly taskId?: string;

    /**
     * Default: "member"
     */
    readonly tasksFor?: "member" | "plan";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getMembers","loadOptionsDependsOn":["groupId"]}
     */
    readonly memberId?: string;


}

