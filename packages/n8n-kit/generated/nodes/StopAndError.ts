// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/StopAndError/StopAndError.node.ts' node

export const name = "stopAndError" as const;
export const description = "Throw an error in the workflow" as const;
export const version = 1 as const;
export const defaults = {"name":"Stop and Error","color":"#ff0000"} as const;
export const credentials = undefined 

/**
 * Throw an error in the workflow
 */
export interface StopAndErrorNodeParameters {

    /**
     * Type of error to throw
     * Default: "errorMessage"
     */
    readonly errorType?: "errorMessage" | "errorObject";

    /**
     */
    readonly errorMessage?: string;

    /**
     * Object containing error properties
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly errorObject?: any;


}

