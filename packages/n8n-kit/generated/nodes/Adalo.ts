// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Adalo/Adalo.node.ts' node

export const name = "adalo" as const;
export const description = "Consume Adalo API" as const;
export const version = 1 as const;
export const defaults = {"name":"Adalo"} as const;
export const credentials = [{"name":"adaloApi","required":true}] as const

/**
 * Consume Adalo API
 */
export interface AdaloNodeParameters {

    /**
     * Default: "collection"
     */
    readonly resource?: "collection";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Open your Adalo application and click on the three buttons beside the collection name, then select API Documentation
     */
    readonly collectionId?: string;

    /**
     */
    readonly rowId?: string;

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "defineBelow"
     */
    readonly dataToSend?: "autoMapInputData" | "defineBelow";

    /**
     * List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
     */
    readonly inputsToIgnore?: string;

    /**
     * Field must be defined in the collection, otherwise it will be ignored. If field defined in the collection is not set here, it will be set to null.
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field to Send","multipleValues":true}
     */
    readonly fieldsUi?: { "fieldValues": any };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;


}

