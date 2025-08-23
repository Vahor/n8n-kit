// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/code/Code.node.ts' node

export const name = "code" as const;
export const description = "LangChain Code Node" as const;
export const version = 1 as const;

/**
 * LangChain Code Node
 */
export interface CodeAINodeParameters {

    /**
     * Default: {}
     */
    readonly code?: { "execute": any, "supplyData": any };

    /**
     */
    readonly notice?: string;

    /**
     * The input to add
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly inputs?: { "input": any };

    /**
     * The output to add
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly outputs?: { "output": any };


}

