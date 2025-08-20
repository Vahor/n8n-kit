// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/N8n/N8n.node.ts' node

export const name = "n8n" as const;
export const description = "Handle events and perform actions on your n8n instance" as const;
export const version = 1 as const;
export const defaults = {"name":"n8n"} as const;
export const credentials = [{"name":"n8nApi","required":true}] as const

/**
 * Handle events and perform actions on your n8n instance
 */
export interface N8nNodeParameters {

    /**
     * Default: "workflow"
     */
    readonly resource?: "audit" | "credential" | "execution" | "workflow";


}

