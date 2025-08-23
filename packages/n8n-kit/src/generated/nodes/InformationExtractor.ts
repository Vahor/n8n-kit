// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/chains/InformationExtractor/InformationExtractor.node.ts' node

export const description = "Extract information from text in a structured format" as const;
export const type = "@n8n/n8n-nodes-langchain.informationExtractor" as const;
export const version = 1.2 as const;
export const inputs = {"":"main","Model":"ai_languageModel"} as const;
export const outputs = {"main":"main"} as const;

export interface InformationExtractorNodeParameters {
    /**
     * The text to extract information from
     * Type options: {"rows":2}
     */
    readonly text?: string;

    /**
     * How to specify the schema for the desired output
     * Default: "fromAttributes"
     */
    readonly schemaType?: "fromAttributes" | "fromJson" | "manual";

    /**
     * Example JSON object to use to generate the schema
     * Default: "{\n\t\"state\": \"California\",\n\t\"cities\": [\"Los Angeles\", \"San Francisco\", \"San Diego\"]\n}"
     * Type options: {"rows":10}
     */
    readonly jsonSchemaExample?: string;

    readonly notice?: string;

    /**
     * Schema to use for the function
     * Default: "{\n\t\"type\": \"object\",\n\t\"properties\": {\n\t\t\"state\": {\n\t\t\t\"type\": \"string\"\n\t\t},\n\t\t\"cities\": {\n\t\t\t\"type\": \"array\",\n\t\t\t\"items\": {\n\t\t\t\t\"type\": \"string\"\n\t\t\t}\n\t\t}\n\t}\n}"
     * Type options: {"rows":10}
     */
    readonly inputSchema?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly attributes?: { "attributes": any };

    /**
     * Default: {}
     */
    readonly options?: { "systemPromptTemplate"?: string, "batching"?: { "batchSize"?: number, "delayBetweenBatches"?: number } };

}
