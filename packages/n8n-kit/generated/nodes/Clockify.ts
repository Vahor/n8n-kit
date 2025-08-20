// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Clockify/Clockify.node.ts' node

export const name = "clockify" as const;
export const description = "Consume Clockify REST API" as const;
export const version = 1 as const;
export const defaults = {"name":"Clockify"} as const;
export const credentials = [{"name":"clockifyApi","required":true}] as const

/**
 * Consume Clockify REST API
 */
export interface ClockifyNodeParameters {

    /**
     * Default: "project"
     */
    readonly resource?: "client" | "project" | "tag" | "task" | "timeEntry" | "user" | "workspace";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"listWorkspaces"}
     */
    readonly workspaceId: string;


}

