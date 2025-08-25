// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/TheHiveProject/TheHiveProject.node.ts' node

export const description = "Consume TheHive 5 API" as const;
export const type = "n8n-nodes-base.theHiveProject" as const;
export const version = 1 as const;
export const credentials = [{"name":"theHiveProjectApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface TheHiveProjectNodeParameters {
    /** Default: "alert" */
    readonly resource?: "alert" | "case" | "comment" | "observable" | "page" | "query" | "task" | "log";

    /** Default: "create" */
    readonly operation?: "create" | "deleteAlert" | "executeResponder" | "get" | "merge" | "promote" | "search" | "update" | "status" | "addAttachment" | "create" | "deleteAttachment" | "deleteCase" | "executeResponder" | "get" | "getAttachment" | "getTimeline" | "search" | "update" | "add" | "deleteComment" | "search" | "update" | "addAttachment" | "create" | "deleteLog" | "deleteAttachment" | "executeResponder" | "get" | "search" | "create" | "deleteObservable" | "executeAnalyzer" | "executeResponder" | "get" | "search" | "update" | "create" | "deletePage" | "search" | "update" | "executeQuery" | "create" | "deleteTask" | "executeResponder" | "get" | "search" | "update";

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly observableUi?: { values: Array<{ dataType?: string, data?: string, binaryProperty?: string, message?: string, tags?: string }> };

    /** Default: {"mode":"list","value":""} */
    readonly alertId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Default: {"mode":"list","value":""} */
    readonly id?: {
	value: string,
	mode: "list" | "url" | "id",
} | {
	value: string,
	mode: "list" | "id",
};

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["id","id.value"],"loadOptionsMethod":"loadResponders"}
     */
    readonly responder?: string;

    /** Default: {} */
    readonly options?: { includeSimilarAlerts?: boolean, includeSimilarCases?: boolean } | { returnCount?: boolean, extraData?: ("isOwner" | "links" | "permissions" | "seen" | "shareCount" | "shares")[] | ("actionRequired" | "actionRequiredMap" | "case" | "caseId" | "caseTemplate" | "caseTemplateId" | "shareCount")[] | ("caseNumber" | "importDate" | "procedureCount" | "status")[] | ("actionRequired" | "alertCount" | "alerts" | "attachmentCount" | "contributors" | "computed.handlingDuration" | "computed.handlingDurationInDays" | "computed.handlingDurationInHours" | "computed.handlingDurationInMinutes" | "computed.handlingDurationInSeconds" | "isOwner" | "observableStats" | "permissions" | "procedureCount" | "shareCount" | "similarAlerts" | "status" | "taskStats")[] | ("links")[] | ("actionCount" | "case" | "task" | "taskId")[] | string } | { caseTemplate?: string } | { canRename?: boolean } | { fileName?: string, dataPropertyName?: string } | { category?: string, title?: string, order?: number };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { values: Array<{ field?: string | "message" | "date" | "message" | "category" | "content" | "title", operator?: "_between" | "_like" | "_endsWith" | "_eq" | "_gt" | "_gte" | "_in" | "_lt" | "_lte" | "_match" | "_ne" | "_startsWith", value?: string, values?: string, from?: string, to?: string }> };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly sort?: { fields: Array<{ field?: string | "message" | "date" | "message" | "category" | "content" | "title", direction?: "asc" | "desc" }> };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"loadAlertStatus"}
     */
    readonly status?: string;

    /** Default: {"mode":"list","value":""} */
    readonly caseId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Array of supported attachments to add to the message
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly attachmentsUi?: { values: Array<{ field?: string }> };

    /**
     * ID of the attachment. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"loadCaseAttachments"}
     */
    readonly attachmentId?: string;

    /** Default: "alert" */
    readonly addTo?: "alert" | "case";

    /** Type options: {"rows":2} */
    readonly message?: string;

    /** Default: {"mode":"list","value":""} */
    readonly commentId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Whether to search for comments in all alerts and cases or in a specific case or alert
     * Default: "all"
     */
    readonly searchIn?: "all" | "alert" | "case";

    /** Default: {"mode":"list","value":""} */
    readonly logId?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: {"mode":"list","value":""} */
    readonly taskId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Whether to search in all tasks or only in selected task
     * Default: true
     */
    readonly allTasks?: boolean;

    /** Default: "case" */
    readonly createIn?: "case" | "alert";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: "file"
     * Type options: {"loadOptionsMethod":"loadObservableTypes"}
     */
    readonly dataType?: string;

    readonly data?: string;

    /** Default: {"mode":"list","value":""} */
    readonly observableId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsDependsOn":["observableId.value","dataType"],"loadOptionsMethod":"loadAnalyzers"}
     */
    readonly analyzers?: any[];

    /** Default: "case" */
    readonly location?: "case" | "knowledgeBase";

    readonly title?: string;

    readonly category?: string;

    /** Type options: {"rows":2} */
    readonly content?: string;

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["caseId"]}
     */
    readonly pageId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Whether to search in knowledge base or only in the selected case
     * Default: true
     */
    readonly searchInKnowledgeBase?: boolean;

    /**
     * Search for objects with filtering and sorting capabilities
     * Default: "=[\n  {\n    \"_name\": \"listOrganisation\"\n  }\n]"
     * Type options: {"rows":10}
     */
    readonly queryJson?: string;

    /**
     * Whether to search in all cases or only in a selected case
     * Default: true
     */
    readonly allCases?: boolean;

}
