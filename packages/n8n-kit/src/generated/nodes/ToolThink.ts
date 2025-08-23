// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolThink/ToolThink.node.ts' node

export const description = "Invite the AI agent to do some thinking" as const;
export const type = "@n8n/n8n-nodes-langchain.toolThink" as const;
export const version = 1.1 as const;

/**
 * Invite the AI agent to do some thinking
 */
export interface ToolThinkNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The thinking tool's description
     * Default: "Use the tool to think about something. It will not obtain new information or change the database, but just append the thought to the log. Use it when complex reasoning or some cache memory is needed."
     * Type options: {"rows":3}
     */
    readonly description?: string;


}

