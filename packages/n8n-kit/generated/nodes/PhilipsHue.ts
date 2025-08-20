// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/PhilipsHue/PhilipsHue.node.ts' node

export const name = "philipsHue" as const;
export const description = "Consume Philips Hue API" as const;
export const version = 1 as const;
export const defaults = {"name":"Philips Hue"} as const;
export const credentials = [{"name":"philipsHueOAuth2Api","required":true}] as const

/**
 * Consume Philips Hue API
 */
export interface PhilipsHueNodeParameters {

    /**
     * Default: "light"
     */
    readonly resource?: "light";


}

