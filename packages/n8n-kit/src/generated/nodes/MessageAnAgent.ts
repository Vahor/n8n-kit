// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MessageAnAgent/MessageAnAgent.node.ts' node

export const description = "Send a message to a n8n agent" as const;
export const type = "n8n-nodes-base.messageAnAgent" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MessageAnAgentNodeParameters {
    /**
     * The agent to send the message to
     * Default: {"mode":"list","value":""}
     */
    readonly agentId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The message to send to the agent
     * Type options: {"rows":4}
     */
    readonly message?: string;

    /** Default: {} */
    readonly advanced?: { sessionId?: string };

}
