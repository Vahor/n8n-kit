// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Redis/RedisTrigger.node.ts' node

export const name = "redisTrigger" as const;
export const description = "Subscribe to redis channel" as const;
export const version = 1 as const;
export const defaults = {"name":"Redis Trigger"} as const;
export const credentials = [{"name":"redis","required":true,"testedBy":"redisConnectionTest"}] as const

/**
 * Subscribe to redis channel
 */
export interface RedisTriggerNodeParameters {

    /**
     * Channels to subscribe to, multiple channels be defined with comma. Wildcard character(*) is supported.
     */
    readonly channels: string;

    /**
     * Default: {}
     */
    readonly options?: { "jsonParseBody"?: boolean, "onlyMessage"?: boolean };


}

