// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Grist/Grist.node.ts' node

export const description = "Consume the Grist API" as const;
export const type = "n8n-nodes-base.grist" as const;
export const version = 1 as const;
export const credentials = [{"name":"gristApi","required":true,"testedBy":"gristApiTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GristNodeParameters {
    /** Default: "getAll" */
    readonly operation?: "create" | "delete" | "getAll" | "update";

    /** In your document, click your profile icon, then Document Settings, then copy the value under "This document's ID" */
    readonly docId?: string;

    /** ID of table to operate on. If unsure, look at the Code View. */
    readonly tableId?: string;

    /** ID of the row to delete, or comma-separated list of row IDs to delete */
    readonly rowId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly additionalOptions?: { filter?: { filterProperties: { field: string, values?: string } }, sort?: { sortProperties: { field: string, direction?: "asc" | "desc" } } };

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "defineInNode"
     */
    readonly dataToSend?: "autoMapInputs" | "defineInNode";

    /** List of input properties to avoid sending, separated by commas. Leave empty to send all properties. */
    readonly inputsToIgnore?: string;

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field to Send","multipleValues":true}
     */
    readonly fieldsToSend?: { properties: { fieldId?: string, fieldValue?: string } };

}
