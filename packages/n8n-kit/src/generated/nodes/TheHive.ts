// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/TheHive/TheHive.node.ts' node

export const description = "Consume TheHive API" as const;
export const type = "n8n-nodes-base.theHive" as const;
export const version = 1 as const;
export const credentials = [{"name":"theHiveApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface TheHiveNodeParameters {
    /** Default: "alert" */
    readonly resource?: "alert" | "case" | "log" | "observable" | "task";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: "create"
     * Type options: {"loadOptionsMethod":"loadAlertOptions"}
     */
    readonly operation?: string | "create" | "executeResponder" | "getAll" | "get";

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /** Title of the alert */
    readonly id?: string;

    readonly caseId?: string;

    /** Title of the alert */
    readonly title?: string;

    /** Description of the alert */
    readonly description?: string;

    /**
     * Severity of the alert. Default=Medium.
     * Default: 2
     */
    readonly severity?: 1 | 2 | 3;

    /** Date and time when the alert was raised default=now */
    readonly date?: string;

    /** Case Tags */
    readonly tags?: string;

    /**
     * Traffict Light Protocol (TLP). Default=Amber.
     * Default: 2
     */
    readonly tlp?: 0 | 1 | 2 | 3;

    /**
     * Status of the alert
     * Default: "New"
     */
    readonly status?: "New" | "Updated" | "Ignored" | "Imported" | "Ok" | "Deleted" | "Cancel" | "Completed" | "InProgress" | "Waiting";

    /** Type of the alert */
    readonly type?: string;

    /** Source of the alert */
    readonly source?: string;

    /** Source reference of the alert */
    readonly sourceRef?: string;

    /**
     * Whether the alert becomes active when updated default=true
     * Default: true
     */
    readonly follow?: boolean;

    /**
     * Artifact attributes
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly artifactUi?: { artifactValues: { dataType?: string, data?: string, binaryProperty?: string, message?: string, tags?: string } };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["id"],"loadOptionsMethod":"loadResponders"}
     */
    readonly responder?: string;

    /** Default: true */
    readonly jsonParameters?: boolean;

    /** Default: {} */
    readonly additionalFields?: { caseTemplate?: string, customFieldsUi?: { customFields: { field?: string, value?: string } }, customFieldsJson?: string } | { caseTemplate?: string };

    /** Default: {} */
    readonly updateFields?: { artifactUi?: { artifactValues: { dataType?: string, data?: string, binaryProperty?: string, message?: string, tags?: string } }, customFieldsUi?: { customFields: { field?: string, value?: string } }, customFieldsJson?: string, caseTemplate?: string, description?: string, follow?: boolean, severity?: 1 | 2 | 3, status?: "New" | "Updated" | "Ignored" | "Imported", tags?: string, title?: string, tlp?: 0 | 1 | 2 | 3 } | { message?: string, tags?: string, tlp?: 0 | 1 | 2 | 3, ioc?: boolean, sighted?: boolean, status?: "Ok" | "Deleted" } | { customFieldsUi?: { customFields: { field?: string, value?: string } }, customFieldsJson?: string, description?: string, endDate?: string, flag?: boolean, impactStatus?: "NoImpact" | "WithImpact" | "NotApplicable", metrics?: string, owner?: string, resolutionStatus?: "Duplicated" | "FalsePositive" | "Indeterminate" | "Other" | "TruePositive", severity?: 1 | 2 | 3, startDate?: string, status?: "Open" | "Resolved" | "Deleted", summary?: string, tags?: string, title?: string, tlp?: 0 | 1 | 2 | 3 } | { description?: string, endDate?: string, flag?: boolean, owner?: string, startDate?: string, status?: "Cancel" | "Completed" | "InProgress" | "Waiting", title?: string };

    /** Default: {} */
    readonly options?: { sort?: string } | { includeSimilar?: boolean } | { tags?: string } | { customFieldsUi?: { customFields: { field?: string, value?: string } }, customFieldsJson?: string, endDate?: string, summary?: string, metrics?: string } | { description?: string, endDate?: string, owner?: string, startDate?: string } | { attachmentValues?: { attachmentValues: { binaryProperty?: string } } };

    /** Default: {} */
    readonly filters?: { customFieldsUi?: { customFields: { field?: string, value?: string } }, description?: string, follow?: boolean, severity?: 1 | 2 | 3, tags?: string, title?: string, tlp?: 0 | 1 | 2 | 3 } | { dataType?: any[], range?: { dateRange: { fromDate?: string, toDate?: string } }, description?: string, ioc?: boolean, keyword?: string, message?: string, tags?: string, sighted?: boolean, Status?: "Ok" | "Deleted", tlp?: 0 | 1 | 2 | 3, data?: string } | { customFieldsUi?: { customFields: { field?: string, value?: string } }, description?: string, endDate?: string, flag?: boolean, impactStatus?: "NoImpact" | "WithImpact" | "NotApplicable", owner?: string, resolutionStatus?: "Duplicated" | "False Positive" | "Indeterminate" | "Other" | "True Positive", severity?: 1 | 2 | 3, startDate?: string, status?: "Open" | "Resolved" | "Deleted", summary?: string, tags?: string, title?: string, tlp?: 0 | 1 | 2 | 3 } | { description?: string, endDate?: string, flag?: boolean, owner?: string, startDate?: string, status?: "Cancel" | "Completed" | "InProgress" | "Waiting", title?: string };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"loadObservableTypes"}
     */
    readonly dataType?: string;

    readonly data?: string;

    /**
     * The name of the input binary field that represent the attachment file
     * Default: "data"
     */
    readonly binaryProperty?: string;

    /** Description of the observable in the context of the case */
    readonly message?: string;

    /** Date and time of the begin of the case default=now */
    readonly startDate?: string;

    /** Whether the observable is an IOC (Indicator of compromise) */
    readonly ioc?: boolean;

    /** Whether sighted previously */
    readonly sighted?: boolean;

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsDependsOn":["id","dataType"],"loadOptionsMethod":"loadAnalyzers"}
     */
    readonly analyzers?: any[];

    readonly owner?: string;

    /** Flag of the case default=false */
    readonly flag?: boolean;

    /** ID of the task */
    readonly taskId?: string;

}
