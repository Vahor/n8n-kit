// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Redis.credentials.ts' credentials

export const name = "redis" as const;

/**
 * displayName: Redis
 * documentationUrl: redis
 */
export interface RedisCredentials {
    /** Type options: {"password":true} */
    readonly "password"?: string;

    readonly "user"?: string;

    /** Default: "localhost" */
    readonly "host"?: string;

    /** Default: 6379 */
    readonly "port"?: number;

    readonly "database"?: number;

    readonly "ssl"?: boolean;

    /** Whether to disable TLS certificate verification. Enable this to use self-signed certificates. WARNING: This makes the connection less secure. */
    readonly "disableTlsVerification"?: boolean;

    readonly __name: "redis";
}
