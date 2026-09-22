// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Dataverse/MicrosoftDataverse.node.ts' node

export const description = "Interact with the Microsoft Dataverse Web API" as const;
export const type = "n8n-nodes-base.microsoftDataverse" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftDataverseOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftDataverseNodeParameters {
    /** Default: "row" */
    readonly resource?: "row";

    /** Default: "getAll" */
    readonly operation?: "create" | "upsert" | "delete" | "get" | "getAll" | "update";

    /**
     * The Dataverse table to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly entitySet?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: "json" */
    readonly inputMode?: "json" | "fields";

    /**
     * Row to send to Dataverse, as a JSON object of column logical name to value
     * Default: "{}"
     */
    readonly fieldsJson?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly fieldsCollection?: { field: Array<{ name?: string, value?: string }> };

    /** Default: {} */
    readonly createOptions?: { returnFullMetadata?: boolean, sessionToken?: string, returnSessionToken?: boolean };

    /** Default: "guid" */
    readonly identifierType?: "guid" | "alternateKey";

    /**
     * GUID of the row to upsert. Dataverse will create the row with this GUID if it does not exist yet. For a partitioned elastic table, add partitionid to the Row Item, or use Create or Update with the alternate-key form.
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["entitySet.value"]}
     */
    readonly recordId?: {
	value: string,
	mode: "list" | "id",
};

    /** OData alternate-key predicate, e.g. accountnumber='ACC-001'. For a partitioned elastic table, include its primary key and partitionid. */
    readonly alternateKey?: string;

    /** Default: {} */
    readonly upsertOptions?: { behavior?: "upsert" | "updateOnly" | "createOnly", allowElasticTableReplacement?: boolean, returnFullMetadata?: boolean, sessionToken?: string, returnSessionToken?: boolean };

    /** Default: {} */
    readonly deleteOptions?: { partitionId?: string };

    /** Default: {} */
    readonly getOptions?: { select?: unknown[], expand?: string, returnFullMetadata?: boolean, partitionId?: string, sessionToken?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly getAllOptions?: { expand?: string, fetchXml?: string, filter?: string, partitionId?: string, sessionToken?: string, returnFullMetadata?: boolean, top?: number, select?: unknown[], orderbyColumn?: string, orderbyDirection?: "asc" | "desc", orderby?: string };

    /** Default: {} */
    readonly updateOptions?: { returnFullMetadata?: boolean, sessionToken?: string, returnSessionToken?: boolean };

}
