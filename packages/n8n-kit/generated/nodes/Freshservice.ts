// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Freshservice/Freshservice.node.ts' node

export const name = "freshservice" as const;
export const description = "Consume the Freshservice API" as const;
export const version = 1 as const;
export const defaults = {"name":"Freshservice"} as const;
export const credentials = [{"name":"freshserviceApi","required":true}] as const

/**
 * Consume the Freshservice API
 */
export interface FreshserviceNodeParameters {

    /**
     * Default: "agent"
     */
    readonly resource?: "agent" | "agentGroup" | "agentRole" | "announcement" | "assetType" | "change" | "department" | "location" | "problem" | "product" | "release" | "requester" | "requesterGroup" | "software" | "ticket";


}

