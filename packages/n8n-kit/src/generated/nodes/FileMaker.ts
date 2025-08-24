// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/FileMaker/FileMaker.node.ts' node

export const description = "Retrieve data from the FileMaker data API" as const;
export const type = "n8n-nodes-base.filemaker" as const;
export const version = 1 as const;
export const credentials = [{"name":"fileMaker","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface FileMakerNodeParameters {
    /** Default: "record" */
    readonly action?: "create" | "delete" | "duplicate" | "edit" | "find" | "records" | "record" | "performscript";

    /**
     * FileMaker Layout Name. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLayouts"}
     */
    readonly layout?: string;

    /** Internal Record ID returned by get (recordid) */
    readonly recid?: number;

    /**
     * The record number of the first record in the range of records
     * Default: 1
     */
    readonly offset?: number;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Whether to get portal data as well */
    readonly getPortals?: boolean;

    /**
     * The portal result set to return. Use the portal object name or portal table name. If this parameter is omitted, the API will return all portal objects and records in the layout. For best performance, pass the portal object name or portal table name. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add portal","loadOptionsMethod":"getPortals"}
     */
    readonly portals?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getResponseLayouts"}
     */
    readonly responseLayout?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly queries?: { "query": any };

    /** Whether to sort data */
    readonly setSort?: boolean;

    /**
     * Sort rules
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly sortParametersUi?: { "rules": any };

    /** Whether to define a script to be run before the action specified by the API call and after the subsequent sort */
    readonly setScriptBefore?: boolean;

    /**
     * The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getScripts"}
     */
    readonly scriptBefore?: string;

    /** A parameter for the FileMaker script */
    readonly scriptBeforeParam?: string;

    /** Whether to define a script to be run after the action specified by the API call but before the subsequent sort */
    readonly setScriptSort?: boolean;

    /**
     * The name of the FileMaker script to be run after the action specified by the API call but before the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getScripts"}
     */
    readonly scriptSort?: string;

    /** A parameter for the FileMaker script */
    readonly scriptSortParam?: string;

    /** Whether to define a script to be run after the action specified by the API call but before the subsequent sort */
    readonly setScriptAfter?: boolean;

    /**
     * The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getScripts"}
     */
    readonly scriptAfter?: string;

    /** A parameter for the FileMaker script */
    readonly scriptAfterParam?: string;

    /** The last modification ID. When you use modId, a record is edited only when the modId matches. */
    readonly modId?: number;

    /**
     * Fields to define
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsParametersUi?: { "fields": any };

    /**
     * The name of the FileMaker script to be run. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getScripts"}
     */
    readonly script?: string;

    /** A parameter for the FileMaker script */
    readonly scriptParam?: string;

}
