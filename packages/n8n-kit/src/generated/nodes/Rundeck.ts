// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Rundeck/Rundeck.node.ts' node

export const description = "Manage Rundeck API" as const;
export const type = "n8n-nodes-base.rundeck" as const;
export const version = 1 as const;
export const credentials = [{"name":"rundeckApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface RundeckNodeParameters {
    /** Default: "job" */
    readonly resource?: "job";

    /** Default: "execute" */
    readonly operation?: "execute" | "getMetadata";

    /** The job ID to execute */
    readonly jobid?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly arguments?: { arguments: { name?: string, value?: string } };

    /** Filter Rundeck nodes by name */
    readonly filter?: string;

}
