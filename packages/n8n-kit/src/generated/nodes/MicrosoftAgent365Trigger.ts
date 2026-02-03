// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/' node

export const description = "Trigger for Microsoft Agent 365" as const;
export const type = "@n8n/n8n-nodes-langchain.microsoftAgent365Trigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftAgent365Api","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftAgent365TriggerNodeParameters {
    /** Type options: {"rows":4} */
    readonly systemPrompt?: string;

    readonly needsFallback?: boolean;

    /** Whether to allow the agent to use Microsoft MCP tools like Calendar, Email, and OneDrive to assist in completing tasks. Requires appropriate permissions in your Microsoft account. */
    readonly useMcpTools?: boolean;

    /** Default: "all" */
    readonly include?: "all" | "selected";

    /** Default: [] */
    readonly includeTools?: ("mcp_CalendarTools" | "mcp_MailTools" | "mcp_MeServer" | "mcp_ODSPRemoteServer" | "mcp_SharePointListsTools" | "mcp_TeamsServer" | "mcp_TeamsCanaryServer" | "mcp_WordServer")[];

    readonly hasOutputParser?: boolean;

    /** Default: {} */
    readonly options?: { maxIterations?: number, welcomeMessage?: string };

}
