// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/HomeAssistant/HomeAssistant.node.ts' node

export const name = "homeAssistant" as const;
export const description = "Consume Home Assistant API" as const;
export const version = 1 as const;
export const defaults = {"name":"Home Assistant"} as const;
export const credentials = [{"name":"homeAssistantApi","required":true,"testedBy":"homeAssistantApiTest"}] as const

/**
 * Consume Home Assistant API
 */
export interface HomeAssistantNodeParameters {

    /**
     * Default: "config"
     */
    readonly resource?: "cameraProxy" | "config" | "event" | "log" | "service" | "state" | "template";


}

