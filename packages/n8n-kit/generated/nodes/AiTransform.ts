// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/AiTransform/AiTransform.node.ts' node

export const name = "aiTransform" as const;
export const description = "Modify data based on instructions written in plain english" as const;
export const version = 1 as const;
export const defaults = {"name":"AI Transform"} as const;
export const credentials = undefined 

/**
 * Modify data based on instructions written in plain english
 */
export interface AiTransformNodeParameters {

    /**
     * Provide instructions on how you want to transform the data, then click 'Generate code'. Use dot notation to refer to nested fields (e.g. address.street).
     * Type options: {"buttonConfig":{"label":"Generate code","hasInputField":true,"inputFieldMaxLength":500,"action":{"type":"askAiCodeGeneration","target":"AI_TRANSFORM_JS_CODE"}}}
     */
    readonly instructions?: any;

    /**
     */
    readonly AI_TRANSFORM_CODE_GENERATED_FOR_PROMPT?: any;

    /**
     * Type options: {"editor":"jsEditor","editorIsReadOnly":true}
     */
    readonly AI_TRANSFORM_JS_CODE?: string;


}

