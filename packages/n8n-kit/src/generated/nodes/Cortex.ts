// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Cortex/Cortex.node.ts' node

export const description = "Apply the Cortex analyzer/responder on the given entity" as const;
export const type = "n8n-nodes-base.cortex" as const;
export const version = 1 as const;
export const credentials = [{"name":"cortexApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface CortexNodeParameters {

    /**
     * Choose a resource
     * Default: "analyzer"
     */
    readonly resource?: "analyzer" | "job" | "responder";

    /**
     * Choose an operation
     * Default: "execute"
     */
    readonly operation?: "execute" | "get" | "report";

    /**
     * Choose the analyzer. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"loadActiveAnalyzers"}
     */
    readonly analyzer?: string;

    /**
     * Choose the observable type. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"loadObservableOptions","loadOptionsDependsOn":["analyzer"]}
     */
    readonly observableType?: string;

    /**
     * Enter the observable value
     */
    readonly observableValue?: string;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * The TLP of the analyzed observable
     * Default: 2
     */
    readonly tlp?: "0" | "1" | "2" | "3";

    /**
     * Default: {}
     */
    readonly additionalFields?: { "force"?: boolean, "timeout"?: number };

    /**
     * Choose the responder. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"loadActiveResponders"}
     */
    readonly responder?: string;

    /**
     * Choose the Data type. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"loadDataTypeOptions","loadOptionsDependsOn":["responder"]}
     */
    readonly entityType?: string;

    /**
     * Choose between providing JSON object or seperated attributes
     */
    readonly jsonObject?: boolean;

    readonly objectData?: string;

    /**
     * Default: {}
     * Type options: {"loadOptionsDependsOn":["entityType"]}
     */
    readonly parameters?: { "values": any };

    /**
     * ID of the job
     */
    readonly jobId?: string;


}

