// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MessageAnAgent/v2/MessageAnAgentV2.node.ts' node

export const description = "Send a message to a n8n agent" as const;
export const type = "n8n-nodes-base.messageAnAgent" as const;
export const version = 3 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MessageAnAgentV2NodeParameters {
    /**
     * The agent to send the message to
     * Default: {"__rl":true,"mode":"list","value":""}
     */
    readonly agentId?: unknown;

    /**
     * The message to send to the agent
     * Type options: {"rows":4}
     */
    readonly message?: string;

    /** Whether to constrain the agent response to a JSON Schema you provide. The conforming object is returned on the "structuredOutput" field. */
    readonly useStructuredOutput?: boolean;

    /**
     * How to specify the structured output schema
     * Default: "fromJson"
     */
    readonly schemaType?: "fromJson" | "manual";

    /**
     * Example JSON object used to generate the output schema
     * Default: "{\n  \"result\": \"The result of the task\"\n}"
     * Type options: {"rows":10}
     */
    readonly jsonSchemaExample?: string;

    /**
     * The JSON Schema that the agent response must conform to
     * Default: "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"result\": {\n      \"type\": \"string\",\n      \"description\": \"The result of the task\"\n    }\n  },\n  \"required\": [\"result\"]\n}"
     * Type options: {"rows":10}
     */
    readonly outputSchema?: string;

    /** Default: {} */
    readonly advanced?: { invokeMode?: "allItems" | "perItem", sessionId?: string, allowOtherNodesData?: boolean };

}
