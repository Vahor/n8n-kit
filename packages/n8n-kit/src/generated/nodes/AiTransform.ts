// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/AiTransform/AiTransform.node.ts' node

export const description = "Modify data based on instructions written in plain english" as const;
export const type = "n8n-nodes-base.aiTransform" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AiTransformNodeParameters {
    /**
     * Provide instructions on how you want to transform the data, then click 'Generate code'. Use dot notation to refer to nested fields (e.g. address.street).
     * Type options: {"buttonConfig":{"label":"Generate code","hasInputField":true,"inputFieldMaxLength":500,"action":{"type":"askAiCodeGeneration","target":"jsCode"}}}
     */
    readonly instructions?: any;

    readonly codeGeneratedForPrompt?: any;

    /**
     * Type options: {"editor":"jsEditor","editorIsReadOnly":true}
     */
    readonly jsCode?: string;

}
