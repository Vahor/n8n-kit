// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Paddle/Paddle.node.ts' node

export const name = "paddle" as const;
export const description = "Consume Paddle API" as const;
export const version = 1 as const;
export const defaults = {"name":"Paddle"} as const;
export const credentials = [{"name":"paddleApi","required":true}] as const

/**
 * Consume Paddle API
 */
export interface PaddleNodeParameters {

    /**
     * Default: "coupon"
     */
    readonly resource?: "coupon" | "payment" | "plan" | "product" | "user";


}

