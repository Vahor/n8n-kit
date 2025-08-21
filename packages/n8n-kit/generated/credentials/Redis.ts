// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Redis.credentials.ts' credentials

export const name = "redis" as const;

/**
 * displayName: Redis
 * documentationUrl: redis
 */
export interface RedisCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     */
    readonly "user"?: string;

    /**
     * Default: "localhost"
     */
    readonly "host"?: string;

    /**
     * Default: 6379
     */
    readonly "port"?: number;

    /**
     */
    readonly "database"?: number;

    /**
     */
    readonly "ssl"?: boolean;

    readonly __name: "redis";


}

