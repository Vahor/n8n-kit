// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/ModelSelector/ModelSelector.node.ts' node

export const description = "Use this node to select one of the connected models to this node based on workflow data" as const;
export const type = "@n8n/n8n-nodes-langchain.modelSelector" as const;
export const version = 1 as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface ModelSelectorNodeParameters {
    /**
     * The number of data inputs you want to merge. The node waits for all connected inputs to be executed.
     * Default: 2
     */
    readonly numberInputs?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

    /**
     * Rules to map workflow data to specific models
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly rules?: { rule: Array<{ modelIndex: string, conditions?: any }> };

}
