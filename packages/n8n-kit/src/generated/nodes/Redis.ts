// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Redis/Redis.node.ts' node

export const description = "Get, send and update data in Redis" as const;
export const type = "n8n-nodes-base.redis" as const;
export const version = 1 as const;
export const credentials = [{"name":"redis","required":true,"testedBy":"redisConnectionTest"}] as const;

/**
 * Get, send and update data in Redis
 */
export interface RedisNodeParameters {

    /**
     * Default: "info"
     */
    readonly operation?: "delete" | "get" | "incr" | "info" | "keys" | "pop" | "publish" | "push" | "set";

    /**
     * Name of the key to delete from Redis
     */
    readonly key?: string;

    /**
     * Name of the property to write received data to. Supports dot-notation. Example: "data.person[0].name".
     * Default: "propertyName"
     */
    readonly propertyName?: string;

    /**
     * The type of the key to get
     * Default: "automatic"
     */
    readonly keyType?: "automatic" | "hash" | "list" | "sets" | "string";

    /**
     * Default: {}
     */
    readonly options?: { "dotNotation"?: boolean };

    /**
     * Whether to set a timeout on key
     */
    readonly expire?: boolean;

    /**
     * Number of seconds before key expiration
     * Default: 60
     * Type options: {"minValue":1}
     */
    readonly ttl?: number;

    /**
     * The key pattern for the keys to return
     */
    readonly keyPattern?: string;

    /**
     * Whether to get the value of matching keys
     * Default: true
     */
    readonly getValues?: boolean;

    /**
     * The value to write in Redis
     */
    readonly value?: string;

    /**
     * Whether the value is JSON or key value pairs
     * Default: true
     */
    readonly valueIsJSON?: boolean;

    /**
     * Channel name
     */
    readonly channel?: string;

    /**
     * Data to publish
     */
    readonly messageData?: string;

    /**
     * Name of the list in Redis
     */
    readonly list?: string;

    /**
     * Whether to push or pop data from the end of the list
     */
    readonly tail?: boolean;


}

