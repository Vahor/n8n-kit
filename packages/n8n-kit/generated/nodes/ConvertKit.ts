// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ConvertKit/ConvertKit.node.ts' node

export const name = "convertKit" as const;
export const description = "Consume ConvertKit API" as const;
export const version = 1 as const;
export const defaults = {"name":"ConvertKit"} as const;
export const credentials = [{"name":"convertKitApi","required":true}] as const

/**
 * Consume ConvertKit API
 */
export interface ConvertKitNodeParameters {

    /**
     * Default: "form"
     */
    readonly resource?: "customField" | "form" | "sequence" | "tag" | "tagSubscriber";


}

