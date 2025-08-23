// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolCode/ToolCode.node.ts' node

export const name = "toolCode" as const;
export const description = "Write a tool in JS or Python" as const;
export const version = 1.3 as const;

/**
 * Write a tool in JS or Python
 */
export interface ToolCodeNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     */
    readonly noticeTemplateExample?: string;

    /**
     */
    readonly name?: string;

    /**
     * Type options: {"rows":3}
     */
    readonly description?: string;

    /**
     * Default: "javaScript"
     */
    readonly language?: "javaScript" | "python";

    /**
     * E.g. Converts any text to uppercase
     * Default: "// Example: convert the incoming query to uppercase and return it\nreturn query.toUpperCase()"
     * Type options: {"editor":"jsEditor"}
     */
    readonly jsCode?: string;

    /**
     * E.g. Converts any text to uppercase
     * Default: "# Example: convert the incoming query to uppercase and return it\nreturn query.upper()"
     * Type options: {"editor":"codeNodeEditor","editorLanguage":"python"}
     */
    readonly pythonCode?: string;

    /**
     * Whether to specify the schema for the function. This would require the LLM to provide the input in the correct format and would validate it against the schema.
     */
    readonly specifyInputSchema?: boolean;

    /**
     * How to specify the schema for the function
     * Default: "fromJson"
     */
    readonly schemaType?: "fromJson" | "manual";

    /**
     * Example JSON object to use to generate the schema
     * Default: "{\n\t\"some_input\": \"some_value\"\n}"
     * Type options: {"rows":10}
     */
    readonly jsonSchemaExample?: string;

    /**
     * Schema to use for the function
     * Default: "{\n\"type\": \"object\",\n\"properties\": {\n\t\"some_input\": {\n\t\t\"type\": \"string\",\n\t\t\"description\": \"Some input to the function\"\n\t\t}\n\t}\n}"
     * Type options: {"rows":10}
     */
    readonly inputSchema?: string;


}

