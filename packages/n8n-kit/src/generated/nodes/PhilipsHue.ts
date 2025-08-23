// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/PhilipsHue/PhilipsHue.node.ts' node

export const name = "philipsHue" as const;
export const description = "Consume Philips Hue API" as const;
export const version = 1 as const;
export const credentials = [{"name":"philipsHueOAuth2Api","required":true}] as const;

/**
 * Consume Philips Hue API
 */
export interface PhilipsHueNodeParameters {

    /**
     * Default: "light"
     */
    readonly resource?: "light";

    /**
     * Default: "update"
     */
    readonly operation?: "delete" | "get" | "getAll" | "update";

    /**
     */
    readonly lightId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * On/Off state of the light
     * Default: true
     */
    readonly on?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "alert"?: "none" | "select" | "lselect", "bri"?: number, "bri_inc"?: number, "ct"?: number, "ct_inc"?: number, "xy"?: string, "xy_inc"?: string, "effect"?: "none" | "colorloop", "hue"?: number, "hue_inc"?: number, "sat"?: number, "sat_inc"?: number, "transitiontime"?: number };


}

