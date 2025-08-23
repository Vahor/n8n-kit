// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Taiga/TaigaTrigger.node.ts' node

export const description = "Handle Taiga events via webhook" as const;
export const type = "n8n-nodes-base.taigaTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"taigaApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface TaigaTriggerNodeParameters {
    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getUserProjects"}
     */
    readonly projectId?: string;

    /**
     * Resources to listen to
     * Default: ["all"]
     */
    readonly resources?: ("all" | "issue" | "milestone" | "task" | "userstory" | "wikipage")[];

    /**
     * Operations to listen to
     * Default: ["all"]
     */
    readonly operations?: ("all" | "create" | "delete" | "change")[];

}
