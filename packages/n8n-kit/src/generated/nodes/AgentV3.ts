// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/agents/Agent/V3/AgentV3.node.ts' node

export const description = "Generates an action plan and executes it. Can use external tools." as const;
export const type = "@n8n/n8n-nodes-langchain.agent" as const;
export const version = 3 as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface AgentV3NodeParameters {
    /** Default: "auto" */
    readonly promptType?: "auto" | "define";

    /**
     * Default: "={{ $json.chatInput }}"
     * Type options: {"rows":2}
     */
    readonly text?: string;

    readonly hasOutputParser?: boolean;

    readonly needsFallback?: boolean;

    /** Default: {} */
    readonly options?: { systemMessage?: string, maxIterations?: number, returnIntermediateSteps?: boolean, passthroughBinaryImages?: boolean, enableStreaming?: boolean, batching?: { batchSize?: number, delayBetweenBatches?: number } };

}
