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
    readonly promptType?: "auto" | "define";

    /**
     * Default: "={{ $json.chatInput }}"
     * Type options: {"rows":2}
     */
    readonly text?: string;

    readonly hasOutputParser?: boolean;

    /** Default: {} */
    readonly options?: { systemMessage?: string, maxIterations?: number, returnIntermediateSteps?: boolean, passthroughBinaryImages?: boolean } | { humanMessage?: string, systemMessage?: string, maxIterations?: number, returnIntermediateSteps?: boolean } | { systemMessage?: string, maxIterations?: number, returnIntermediateSteps?: boolean } | { humanMessageTemplate?: string, prefix?: string, suffixChat?: string, suffix?: string, maxIterations?: number, returnIntermediateSteps?: boolean } | { ignoredTables?: string, includedSampleRows?: number, includedTables?: string, prefixPrompt?: string, suffixPrompt?: string, topK?: number } | { humanMessageTemplate?: string };

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
