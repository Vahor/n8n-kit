// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/KoBoToolbox/KoBoToolboxTrigger.node.ts' node

export const description = "Process KoBoToolbox submissions" as const;
export const type = "n8n-nodes-base.koBoToolboxTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"koBoToolboxApi","required":true}] as const;

/**
 * Process KoBoToolbox submissions
 */
export interface KoBoToolboxTriggerNodeParameters {

    /**
     * Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"loadForms"}
     */
    readonly formId?: string;

    /**
     * Default: "formSubmission"
     */
    readonly triggerOn?: "formSubmission";

    /**
     * Default: {}
     */
    readonly formatOptions?: { "download"?: boolean, "binaryNamingScheme"?: "sequence" | "question", "dataPropertyAttachmentsPrefixName"?: string, "version"?: "download_url" | "download_small_url" | "download_medium_url" | "download_large_url", "selectMask"?: string, "numberMask"?: string, "reformat"?: boolean };


}

