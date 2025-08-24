// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/KoBoToolbox/KoBoToolbox.node.ts' node

export const description = "Work with KoBoToolbox forms and submissions" as const;
export const type = "n8n-nodes-base.koBoToolbox" as const;
export const version = 1 as const;
export const credentials = [{"name":"koBoToolboxApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface KoBoToolboxNodeParameters {
    /** Default: "submission" */
    readonly resource?: "file" | "form" | "hook" | "submission";

    /** Default: "get" */
    readonly operation?: "get" | "getAll" | "redeploy" | "get" | "getAll" | "getLogs" | "retryAll" | "retryOne" | "delete" | "get" | "getAll" | "getValidation" | "setValidation" | "create" | "delete" | "get" | "getAll";

    /**
     * Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"loadForms"}
     */
    readonly formId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 1000
     * Type options: {"maxValue":3000}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly options?: { "sort"?: { "value": any } } | { "download"?: boolean, "binaryNamingScheme"?: "sequence" | "question", "dataPropertyAttachmentsPrefixName"?: string, "fields"?: string, "version"?: "download_url" | "download_small_url" | "download_medium_url" | "download_large_url", "selectMask"?: string, "numberMask"?: string, "reformat"?: boolean, "sort"?: string };

    /** Default: {} */
    readonly filters?: { "filter"?: string };

    /** Hook ID (starts with h, e.g. hVehywQ2oXPYGHJHKtqth4) */
    readonly hookId?: string;

    /** Hook log ID (starts with hl, e.g. hlSbGKaUKzTVNoWEVMYbLHe) */
    readonly logId?: string;

    /** Only retrieve logs with a specific status */
    readonly status?: "" | "0" | "1" | "2";

    /** Minimum date for the hook log to retrieve */
    readonly startDate?: string;

    /** Maximum date for the hook log to retrieve */
    readonly endDate?: string;

    /** Submission ID (number, e.g. 245128) */
    readonly submissionId?: string;

    /** Desired Validation Status */
    readonly validationStatus?: "validation_status_approved" | "validation_status_not_approved" | "validation_status_on_hold";

    /** Default: "none" */
    readonly filterType?: "none" | "json";

    readonly filterJson?: string;

    /** Uid of the file (should start with "af" e.g. "afQoJxA4kmKEXVpkH6SYbhb" */
    readonly fileId?: string;

    /**
     * Name of the binary property to write the file into
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /** Whether to download the file content into a binary property */
    readonly download?: boolean;

    /** Default: "binary" */
    readonly fileMode?: "binary" | "url";

    /** HTTP(s) link to the file to upload */
    readonly fileUrl?: string;

}
