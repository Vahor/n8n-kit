// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/ToDo/MicrosoftToDo.node.ts' node

export const name = "microsoftToDo" as const;
export const description = "Consume Microsoft To Do API." as const;
export const version = 1 as const;
export const defaults = {"name":"Microsoft To Do"} as const;
export const credentials = [{"name":"microsoftToDoOAuth2Api","required":true}] as const

/**
 * Consume Microsoft To Do API.
 */
export interface MicrosoftToDoNodeParameters {

    /**
     * Default: "task"
     */
    readonly resource?: "linkedResource" | "list" | "task";


}

