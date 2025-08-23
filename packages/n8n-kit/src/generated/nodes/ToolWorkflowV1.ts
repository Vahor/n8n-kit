// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolWorkflow/v1/ToolWorkflowV1.node.ts' node

export const description = "Uses another n8n workflow as a tool. Allows packaging any n8n node(s) as a tool." as const;
export const type = "@n8n/n8n-nodes-langchain.toolWorkflow" as const;
export const version = 1.3 as const;
export const inputs = {} as const;
export const outputs = {"ai_tool":"ai_tool"} as const;

export interface ToolWorkflowV1NodeParameters {
    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    readonly noticeTemplateExample?: string;

    readonly name?: string;

    /**
     * Type options: {"rows":3}
     */
    readonly description?: string;

    readonly executeNotice?: string;

    /**
     * Where to get the workflow to execute from
     * Default: "database"
     */
    readonly source?: "database" | "parameter";

    /**
     * The workflow to execute
     */
    readonly workflowId?: string | any;

    /**
     * The workflow JSON code to execute
     * Default: "\n\n\n\n\n\n\n\n\n"
     * Type options: {"rows":10}
     */
    readonly workflowJson?: string;

    /**
     * Where to find the data that this tool should return. n8n will look in the output of the last-executed node of the workflow for a field with this name, and return its value.
     * Default: "response"
     */
    readonly responsePropertyName?: string;

    /**
     * These will be output by the 'execute workflow' trigger of the workflow being called
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly fields?: { "values": any };

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
