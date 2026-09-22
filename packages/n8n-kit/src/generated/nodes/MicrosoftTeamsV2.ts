// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Teams/v2/MicrosoftTeamsV2.node.ts' node

export const description = "Consume Microsoft Teams API" as const;
export const type = "n8n-nodes-base.microsoftTeams" as const;
export const version = 2 as const;
export const credentials = [{"name":"microsoftTeamsOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["microsoftTeamsOAuth2Api"]}}},{"name":"microsoftOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["microsoftOAuth2Api"]}}},{"name":"microsoftEntraServicePrincipalApi","required":true,"displayOptions":{"show":{"authentication":["microsoftEntraServicePrincipalApi"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftTeamsV2NodeParameters {
    /** Default: "microsoftTeamsOAuth2Api" */
    readonly authentication?: "microsoftTeamsOAuth2Api" | "microsoftOAuth2Api" | "microsoftEntraServicePrincipalApi";

    /** Default: "channel" */
    readonly resource?: "channel" | "channelMessage" | "chatMember" | "chatMessage" | "onlineMeeting" | "task";

    /** Default: "create" */
    readonly operation?: "create" | "deleteChannel" | "get" | "getAll" | "update" | "create" | "softDeleteMessage" | "get" | "getAll" | "getAllReplies" | "reply" | "undoSoftDeleteMessage" | "add" | "getAll" | "remove" | "create" | "softDeleteMessage" | "get" | "getAll" | "sendAndWait" | "undoSoftDeleteMessage" | "create" | "createOrGet" | "deleteMeeting" | "get" | "update" | "create" | "deleteTask" | "get" | "getAll" | "update";

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
    readonly options?: { description?: string, type?: "private" | "standard" } | { description?: string } | { includeLinkToWorkflow?: boolean, makeReply?: string } | { includeLinkToWorkflow?: boolean } | { parentMessageId?: string } | { historyStartDate?: string, role?: "guest" | "owner", shareHistory?: "all" | "fromDate" | "none" } | { limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { messageButtonLabel?: string, responseFormTitle?: string, responseFormDescription?: string, responseFormButtonLabel?: string, responseFormCustomCss?: string, limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { allowAttendeeToEnableCamera?: boolean, allowAttendeeToEnableMic?: boolean, allowMeetingChat?: "disabled" | "enabled" | "limited", allowTeamworkReactions?: boolean, allowedPresenters?: "everyone" | "organization" | "organizer", isEntryExitAnnounced?: boolean, lobbyBypassScope?: "everyone" | "invited" | "organization" | "organizationAndFederated" | "organizationExcludingGuests" | "organizer", recordAutomatically?: boolean, passcodeRequired?: boolean } | { endDateTime?: string, startDateTime?: string, subject?: string } | { assignedTo?: {
	value: string,
	mode: "list" | "id",
} | {
	value: string,
	mode: "id",
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

    /** The ID of the message to retrieve. The message ID is the number before "?tenantId" in the message URL. */
    readonly messageId?: string;

    /**
     * Select the group chat from the list, or specify its ID (find the chat ID after "conversations/" in the URL). One-on-one chats are not listed because Teams does not allow adding members to a 1:1 chat.
     * Default: {"mode":"list","value":""}
     */
    readonly chatId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Select the user from the list or by ID. Guest users must be given by their object ID, not by their user principal name.
     * Default: {"mode":"list","value":""}
     */
    readonly userId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Select the member from the list, or give the membership ID returned by Chat Member → Get Many (the ID field, not the "userId" field)
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["chatId.value"]}
     */
    readonly membershipId?: {
	value: string,
	mode: "list" | "id",
};

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
     * The user whose meetings the app creates and manages. From List and user principal names need the User.Read.All application permission; an object ID needs none.
     * Default: {"mode":"list","value":""}
     */
    readonly organizerId?: {
	value: string,
	mode: "list" | "id",
};

    /** The subject of the meeting */
    readonly subject?: string;

    /** The date and time when the meeting starts */
    readonly startDateTime?: string;

    /** The date and time when the meeting ends. Must be later than the start time. */
    readonly endDateTime?: string;

    /** Your own ID for the meeting. Running the node again with the same ID for the same organizer returns the existing meeting instead of creating another one. */
    readonly externalId?: string;

    /**
     * The online meeting, by its ID or by its join URL
     * Default: {"mode":"id","value":""}
     */
    readonly meetingId?: {
	value: string,
	mode: "id" | "url",
};

    /** Default: {} */
    readonly updateFields?: { allowAttendeeToEnableCamera?: boolean, allowAttendeeToEnableMic?: boolean, allowMeetingChat?: "disabled" | "enabled" | "limited", allowTeamworkReactions?: boolean, allowedPresenters?: "everyone" | "organization" | "organizer", isEntryExitAnnounced?: boolean, endDateTime?: string, lobbyBypassScope?: "everyone" | "invited" | "organization" | "organizationAndFederated" | "organizationExcludingGuests" | "organizer", recordAutomatically?: boolean, startDateTime?: string, subject?: string } | { assignedTo?: {
	value: string,
	mode: "list" | "id",
} | {
	value: string,
	mode: "id",
}, bucketId?: {
	value: string,
	mode: "list" | "id",
} | {
	value: string,
	mode: "id",
}, dueDateTime?: string, groupId?: {
	value: string,
	mode: "list" | "id",
}, percentComplete?: number, planId?: {
	value: string,
	mode: "list" | "id",
} | {
	value: string,
	mode: "id",
}, title?: string };

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
} | {
	value: string,
	mode: "id",
};

    /**
     * The bucket for the task to belong to
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["planId.value"]}
     */
    readonly bucketId?: {
	value: string,
	mode: "list" | "id",
} | {
	value: string,
	mode: "id",
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

}
