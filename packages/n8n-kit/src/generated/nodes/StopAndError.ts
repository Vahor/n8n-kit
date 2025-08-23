// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/StopAndError/StopAndError.node.ts' node

export const name = "stopAndError" as const;
export const description = "Throw an error in the workflow" as const;
export const version = 1 as const;

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
    readonly errorObject?: string;


}

