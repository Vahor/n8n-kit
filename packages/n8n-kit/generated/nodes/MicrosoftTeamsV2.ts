// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Teams/v2/MicrosoftTeamsV2.node.ts' node

export const name = "microsoftTeams" as const;
export const description = "Consume Microsoft Teams API" as const;
export const version = 2 as const;

/**
 * Consume Microsoft Teams API
 */
export interface MicrosoftTeamsV2NodeParameters {

    /**
     * Default: "channel"
     */
    readonly resource?: "channel" | "channelMessage" | "chatMessage" | "task";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "deleteChannel" | "get" | "getAll" | "update" | "create" | "getAll" | "create" | "get" | "getAll" | "sendAndWait" | "create" | "deleteTask" | "get" | "getAll" | "update";

    /**
     * Select the team from the list, by URL, or by ID (the ID is the "groupId" parameter in the URL you get from "Get a link to the team")
     * Default: {"mode":"list","value":""}
     */
    readonly teamId?: any;

    /**
     * The name of the new channel you want to create
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly options?: { "description"?: string, "type"?: "private" | "standard" } | { "description"?: string } | { "includeLinkToWorkflow"?: boolean, "makeReply"?: string } | { "includeLinkToWorkflow"?: boolean } | { "limitWaitTime"?: { "values": any }, "appendAttribution"?: boolean } | { "messageButtonLabel"?: string, "responseFormTitle"?: string, "responseFormDescription"?: string, "responseFormButtonLabel"?: string, "responseFormCustomCss"?: string, "limitWaitTime"?: { "values": any }, "appendAttribution"?: boolean } | { "assignedTo"?: any, "dueDateTime"?: string, "percentComplete"?: number };

    /**
     * Select the channel from the list, by URL, or by ID (the ID is the "threadId" in the URL)
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["teamId.value"]}
     */
    readonly channelId?: any;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Whether the message is plain text or HTML
     * Default: "text"
     */
    readonly contentType?: "text" | "html";

    /**
     * The content of the message to be sent
     * Type options: {"rows":2}
     */
    readonly message?: string;

    /**
     * Select the chat from the list, by URL, or by ID (find the chat ID after "conversations/" in the URL)
     * Default: {"mode":"list","value":""}
     */
    readonly chatId?: any;

    /**
     * The ID of the message to retrieve
     */
    readonly messageId?: string;

    /**
     * Default: "approval"
     */
    readonly responseType?: "approval" | "freeText" | "customForm";

    /**
     * Default: "fields"
     */
    readonly defineForm?: "fields" | "json";

    /**
     * Default: "[\n   {\n      \"fieldLabel\":\"Name\",\n      \"placeholder\":\"enter you name\",\n      \"requiredField\":true\n   },\n   {\n      \"fieldLabel\":\"Age\",\n      \"fieldType\":\"number\",\n      \"placeholder\":\"enter your age\"\n   },\n   {\n      \"fieldLabel\":\"Email\",\n      \"fieldType\":\"email\",\n      \"requiredField\":true\n   }\n]"
     * Type options: {"rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly formFields?: { "values": any };

    /**
     * Default: {}
     */
    readonly approvalOptions?: { "values": any };

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["groupSource"]}
     */
    readonly groupId?: any;

    /**
     * The plan for the task to belong to
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["groupId.value"]}
     */
    readonly planId?: any;

    /**
     * The bucket for the task to belong to
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["planId.value"]}
     */
    readonly bucketId?: any;

    /**
     * Title of the task
     */
    readonly title?: string;

    /**
     * The ID of the task to delete
     */
    readonly taskId?: string;

    /**
     * Whether to retrieve the tasks for a user or for a plan
     * Default: "member"
     */
    readonly tasksFor?: "member" | "plan";

    /**
     * Default: {}
     */
    readonly updateFields?: { "assignedTo"?: any, "bucketId"?: any, "dueDateTime"?: string, "groupId"?: any, "percentComplete"?: number, "planId"?: any, "title"?: string };


}

