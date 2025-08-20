// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Webflow/V2/WebflowTriggerV2.node.ts' node

export const name = "webflow" as const;
export const description = "Consume the Webflow API" as const;
export const version = 2 as const;
export const defaults = {"name":"Webflow"} as const;
export const credentials = [{"name":"webflowOAuth2Api","required":true}] as const

/**
 * Consume the Webflow API
 */
export interface WebflowTriggerV2NodeParameters {

    /**
     * Default: "item"
     */
    readonly resource?: "item";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "deleteItem" | "get" | "getAll" | "update";


}

