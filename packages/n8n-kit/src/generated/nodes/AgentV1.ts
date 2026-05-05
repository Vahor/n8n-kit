// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/agents/Agent/V1/AgentV1.node.ts' node

export const description = "Generates an action plan and executes it. Can use external tools." as const;
export const type = "@n8n/n8n-nodes-langchain.agent" as const;
export const version = 1.9 as const;
export const credentials = [{"name":"mySql","required":true,"testedBy":"mysqlConnectionTest","displayOptions":{"show":{"agent":["sqlAgent"],"/dataSource":["mysql"]}}},{"name":"postgres","required":true,"displayOptions":{"show":{"agent":["sqlAgent"],"/dataSource":["postgres"]}}}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface AgentV1NodeParameters {
    /** Default: "conversationalAgent" */
    readonly agent?: "conversationalAgent" | "openAiFunctionsAgent" | "planAndExecuteAgent" | "reActAgent" | "sqlAgent" | "toolsAgent" | "conversationalAgent" | "openAiFunctionsAgent" | "planAndExecuteAgent" | "reActAgent" | "sqlAgent";

    /** Default: "auto" */
    readonly promptType?: "auto" | "guardrails" | "define";

    /**
     * Default: "={{ $json.guardrailsInput }}"
     * Type options: {"rows":2}
     */
    readonly text?: string;

    readonly hasOutputParser?: boolean;

    /** Default: {} */
    readonly options?: { systemMessage?: string, maxIterations?: number, returnIntermediateSteps?: boolean, passthroughBinaryImages?: boolean, tracingMetadata?: { values: Array<{ key?: string, type?: "arrayValue" | "booleanValue" | "numberValue" | "objectValue" | "stringValue", stringValue?: string, numberValue?: string, booleanValue?: "true" | "false", arrayValue?: string, objectValue?: string }> } } | { humanMessage?: string, systemMessage?: string, maxIterations?: number, returnIntermediateSteps?: boolean, tracingMetadata?: { values: Array<{ key?: string, type?: "arrayValue" | "booleanValue" | "numberValue" | "objectValue" | "stringValue", stringValue?: string, numberValue?: string, booleanValue?: "true" | "false", arrayValue?: string, objectValue?: string }> } } | { systemMessage?: string, maxIterations?: number, returnIntermediateSteps?: boolean, tracingMetadata?: { values: Array<{ key?: string, type?: "arrayValue" | "booleanValue" | "numberValue" | "objectValue" | "stringValue", stringValue?: string, numberValue?: string, booleanValue?: "true" | "false", arrayValue?: string, objectValue?: string }> } } | { humanMessageTemplate?: string, prefix?: string, suffixChat?: string, suffix?: string, maxIterations?: number, returnIntermediateSteps?: boolean, tracingMetadata?: { values: Array<{ key?: string, type?: "arrayValue" | "booleanValue" | "numberValue" | "objectValue" | "stringValue", stringValue?: string, numberValue?: string, booleanValue?: "true" | "false", arrayValue?: string, objectValue?: string }> } } | { ignoredTables?: string, includedSampleRows?: number, includedTables?: string, prefixPrompt?: string, suffixPrompt?: string, topK?: number, tracingMetadata?: { values: Array<{ key?: string, type?: "arrayValue" | "booleanValue" | "numberValue" | "objectValue" | "stringValue", stringValue?: string, numberValue?: string, booleanValue?: "true" | "false", arrayValue?: string, objectValue?: string }> } } | { humanMessageTemplate?: string, tracingMetadata?: { values: Array<{ key?: string, type?: "arrayValue" | "booleanValue" | "numberValue" | "objectValue" | "stringValue", stringValue?: string, numberValue?: string, booleanValue?: "true" | "false", arrayValue?: string, objectValue?: string }> } };

    /**
     * SQL database to connect to
     * Default: "sqlite"
     */
    readonly dataSource?: "mysql" | "postgres" | "sqlite";

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /** Type options: {"rows":5} */
    readonly input?: string;

}
