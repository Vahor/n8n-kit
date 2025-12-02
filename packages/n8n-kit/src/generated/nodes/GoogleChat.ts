// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Chat/GoogleChat.node.ts' node

export const description = "Consume Google Chat API" as const;
export const type = "n8n-nodes-base.googleChat" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleApi","required":true,"testedBy":"testGoogleTokenAuth","displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleChatOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleChatNodeParameters {
    /** Default: "serviceAccount" */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /** Default: "message" */
    readonly resource?: "member" | "message" | "space";

    /** Default: "get" */
    readonly operation?: "get" | "getAll" | "create" | "delete" | "get" | "sendAndWait" | "update";

    /** Member to be retrieved in the form "spaces/*<space>/members/*" */
    readonly memberId?: string;

    /**
     * The name of the space for which to retrieve members, in the form "spaces/*". Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getSpaces"}
     */
    readonly spaceId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"maxValue":1000}
     */
    readonly limit?: number;

    /** Whether to pass the message object as JSON */
    readonly jsonParameters?: boolean;

    /** Default: {} */
    readonly messageUi?: { text?: string };

    /**
     * Message input as JSON Object or JSON String
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly messageJson?: string;

    /** Default: {} */
    readonly additionalFields?: { requestId?: string };

    /** Resource name of the message to be deleted, in the form "spaces//messages/" */
    readonly messageId?: string;

    /** Default: {} */
    readonly updateFieldsUi?: { text?: string };

    /**
     * Message input as JSON Object or JSON String
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly updateFieldsJson?: string;

    /** Type options: {"rows":4} */
    readonly message?: string;

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
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly formFields?: { values: Array<{ fieldLabel: string, fieldName?: string, fieldType: "checkbox" | "html" | "date" | "dropdown" | "email" | "file" | "hiddenField" | "number" | "password" | "radio" | "text" | "textarea", elementName?: string, placeholder?: string, defaultValue?: string, fieldValue?: string, fieldOptions: { values: Array<{ option?: string }> }, multiselectLegacyNotice?: string, multiselect?: boolean, limitSelection?: "exact" | "range" | "unlimited", numberOfSelections?: number, minSelections?: number, maxSelections?: number, html?: string, multipleFiles?: boolean, acceptFileTypes?: string, formatDate?: string, requiredField?: boolean }> };

    /** Default: {} */
    readonly approvalOptions?: { values: { approvalType?: "single" | "double", approveLabel?: string, disapproveLabel?: string } };

    /** Default: {} */
    readonly options?: { limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { messageButtonLabel?: string, responseFormTitle?: string, responseFormDescription?: string, responseFormButtonLabel?: string, responseFormCustomCss?: string, limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean };

}
