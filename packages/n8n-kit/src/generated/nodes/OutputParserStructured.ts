// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/output_parser/OutputParserStructured/OutputParserStructured.node.ts' node

export const name = "outputParserStructured" as const;
export const description = "Return data in a defined JSON format" as const;
export const version = 1.3 as const;

/**
 * Return data in a defined JSON format
 */
export interface OutputParserStructuredNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * How to specify the schema for the function
     * Default: "fromJson"
     */
    readonly schemaType?: "fromJson" | "manual";

    /**
     * Example JSON object to use to generate the schema
     * Default: "{\n\t\"state\": \"California\",\n\t\"cities\": [\"Los Angeles\", \"San Francisco\", \"San Diego\"]\n}"
     * Type options: {"rows":10}
     */
    readonly jsonSchemaExample?: string;

    /**
     * Schema to use for the function
     * Default: "{\n\t\"type\": \"object\",\n\t\"properties\": {\n\t\t\"state\": {\n\t\t\t\"type\": \"string\"\n\t\t},\n\t\t\"cities\": {\n\t\t\t\"type\": \"array\",\n\t\t\t\"items\": {\n\t\t\t\t\"type\": \"string\"\n\t\t\t}\n\t\t}\n\t}\n}"
     * Type options: {"rows":10}
     */
    readonly inputSchema?: string;

    /**
     * JSON Schema to structure and validate the output against
     * Default: "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"state\": {\n      \"type\": \"string\"\n    },\n    \"cities\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    }\n  }\n}"
     * Type options: {"rows":10}
     */
    readonly jsonSchema?: string;

    /**
     * Whether to automatically fix the output when it is not in the correct format. Will cause another LLM call.
     */
    readonly autoFix?: boolean;

    /**
     * Whether to customize the prompt used for retrying the output parsing. If disabled, a default prompt will be used.
     */
    readonly customizeRetryPrompt?: boolean;

    /**
     * Prompt template used for fixing the output. Uses placeholders: "{instructions}" for parsing rules, "{completion}" for the failed attempt, and "{error}" for the validation error message.
     * Default: "Instructions:\n--------------\n{instructions}\n--------------\nCompletion:\n--------------\n{completion}\n--------------\n\nAbove, the Completion did not satisfy the constraints given in the Instructions.\nError:\n--------------\n{error}\n--------------\n\nPlease try again. Please only respond with an answer that satisfies the constraints laid out in the Instructions:"
     * Type options: {"rows":10}
     */
    readonly prompt?: string;


}

