// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Teams/v2/MicrosoftTeamsV2.node.ts' node

export const description = "Consume Microsoft Teams API" as const;
export const type = "n8n-nodes-base.microsoftTeams" as const;
export const version = 2 as const;
export const credentials = [{"name":"microsoftTeamsOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftTeamsV2NodeParameters {
    /** Default: "channel" */
    readonly resource?: "channel" | "channelMessage" | "chatMessage" | "task";

    /** Default: "create" */
    readonly operation?: "create" | "deleteChannel" | "get" | "getAll" | "update" | "create" | "getAll" | "create" | "get" | "getAll" | "sendAndWait" | "create" | "deleteTask" | "get" | "getAll" | "update";

    /**
     * Select the team from the list, by URL, or by ID (the ID is the "groupId" parameter in the URL you get from "Get a link to the team")
     * Default: {"mode":"list","value":""}
     */
    readonly teamId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** The name of the new channel you want to create */
    readonly name?: string;

    /** Default: {} */
    readonly options?: { description?: string, type?: "private" | "standard" } | { description?: string } | { includeLinkToWorkflow?: boolean, makeReply?: string } | { includeLinkToWorkflow?: boolean } | { limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { messageButtonLabel?: string, responseFormTitle?: string, responseFormDescription?: string, responseFormButtonLabel?: string, responseFormCustomCss?: string, limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { assignedTo?: {
	value: string,
	mode: "list" | "id",
}, dueDateTime?: string, percentComplete?: number };

    /**
     * Select the channel from the list, by URL, or by ID (the ID is the "threadId" in the URL)
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["teamId.value"]}
     */
    readonly channelId?: {
	value: string,
	mode: "list" | "id",
};

    /** Whether to return all results or only up to a given limit */
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
    readonly chatId?: {
	value: string,
	mode: "list" | "id",
};

    /** The ID of the message to retrieve */
    readonly messageId?: string;

    /** Default: "approval" */
    readonly responseType?: "approval" | "freeText" | "customForm";

    /** Default: "fields" */
    readonly defineForm?: "fields" | "json";

    /**
     * Default: "[\n  {\n    \"fieldLabel\": \"Name\",\n    \"placeholder\": \"enter your name\",\n    \"requiredField\": true\n  },\n  {\n    \"fieldLabel\": \"Age\",\n    \"fieldType\": \"number\",\n    \"placeholder\": \"enter your age\"\n  },\n  {\n    \"fieldLabel\": \"Email\",\n    \"fieldType\": \"email\",\n    \"requiredField\": true\n  },\n  {\n    \"fieldLabel\": \"Textarea\",\n    \"fieldType\": \"textarea\"\n  },\n  {\n    \"fieldLabel\": \"Dropdown Options\",\n    \"fieldType\": \"dropdown\",\n    \"fieldOptions\": {\n      \"values\": [\n        {\n          \"option\": \"option 1\"\n        },\n        {\n          \"option\": \"option 2\"\n        }\n      ]\n    },\n    \"requiredField\": true\n  },\n  {\n    \"fieldLabel\": \"Checkboxes\",\n    \"fieldType\": \"checkbox\",\n    \"fieldOptions\": {\n      \"values\": [\n        {\n          \"option\": \"option 1\"\n        },\n        {\n          \"option\": \"option 2\"\n        }\n      ]\n    }\n  },\n  {\n    \"fieldLabel\": \"Radio\",\n    \"fieldType\": \"radio\",\n    \"fieldOptions\": {\n      \"values\": [\n        {\n          \"option\": \"option 1\"\n        },\n        {\n          \"option\": \"option 2\"\n        }\n      ]\n    }\n  },\n  {\n    \"fieldLabel\": \"Email\",\n    \"fieldType\": \"email\",\n    \"placeholder\": \"me@mail.con\"\n  },\n  {\n    \"fieldLabel\": \"File\",\n    \"fieldType\": \"file\",\n    \"multipleFiles\": true,\n    \"acceptFileTypes\": \".jpg, .png\"\n  },\n  {\n    \"fieldLabel\": \"Number\",\n    \"fieldType\": \"number\"\n  },\n  {\n    \"fieldLabel\": \"Password\",\n    \"fieldType\": \"password\"\n  }\n]\n"
     * Type options: {"rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true,"fixedCollection":{"itemTitle":"={{ $collection.item.properties.find(p => p.name === \"fieldType\").options.find(o => o.value === $collection.item.value.fieldType).name }}"}}
     */
    readonly formFields?: { values: Array<{ fieldName: string, fieldLabel: string, fieldType: "checkbox" | "html" | "date" | "dropdown" | "email" | "file" | "hiddenField" | "number" | "password" | "radio" | "text" | "textarea", elementName?: string, placeholder?: string, defaultValue?: string, fieldValue?: string, fieldOptions: { values: Array<{ option?: string }> }, multiselectLegacyNotice?: string, multiselect?: boolean, limitSelection?: "exact" | "range" | "unlimited", numberOfSelections?: number, minSelections?: number, maxSelections?: number, html?: string, multipleFiles?: boolean, acceptFileTypes?: string, formatDate?: string, requiredField?: boolean }> };

    /** Default: {} */
    readonly approvalOptions?: { values: { approvalType?: "single" | "double", approveLabel?: string, disapproveLabel?: string } };

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["groupSource"]}
     */
    readonly groupId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The plan for the task to belong to
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["groupId.value"]}
     */
    readonly planId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The bucket for the task to belong to
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["planId.value"]}
     */
    readonly bucketId?: {
	value: string,
	mode: "list" | "id",
};

    /** Title of the task */
    readonly title?: string;

    /** The ID of the task to delete */
    readonly taskId?: string;

    /**
     * Whether to retrieve the tasks for a user or for a plan
     * Default: "member"
     */
    readonly tasksFor?: "member" | "plan";

    /** Default: {} */
    readonly updateFields?: { assignedTo?: {
	value: string,
	mode: "list" | "id",
}, bucketId?: {
	value: string,
	mode: "list" | "id",
}, dueDateTime?: string, groupId?: {
	value: string,
	mode: "list" | "id",
}, percentComplete?: number, planId?: {
	value: string,
	mode: "list" | "id",
}, title?: string };

}
