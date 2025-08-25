// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/agents/Agent/V2/AgentToolV2.node.ts' node

export const description = "Generates an action plan and executes it. Can use external tools." as const;
export const type = "@n8n/n8n-nodes-langchain.agentTool" as const;
export const version = 2.2 as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"ai_tool":"ai_tool"} as const;

export interface AgentToolV2NodeParameters {
    /**
     * Explain to the LLM what this tool does, a good, specific description would allow LLMs to produce expected results much more often
     * Default: "AI Agent that can call other tools"
     * Type options: {"rows":2}
     */
    readonly toolDescription?: string;

    /** Type options: {"rows":2} */
    readonly text?: string;

    readonly hasOutputParser?: boolean;

    readonly needsFallback?: boolean;

    /** Default: {} */
    readonly options?: { systemMessage?: string, maxIterations?: number, returnIntermediateSteps?: boolean, passthroughBinaryImages?: boolean, batching?: { batchSize?: number, delayBetweenBatches?: number } };

}
