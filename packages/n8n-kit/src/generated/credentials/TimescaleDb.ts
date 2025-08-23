// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TimescaleDb.credentials.ts' credentials

export const name = "timescaleDb" as const;

/**
 * displayName: TimescaleDB
 * documentationUrl: timescaleDb
 */
export interface TimescaleDbCredentials {
    /**
     * Default: "localhost"
     */
    readonly "host"?: string;

    /**
     * Default: "postgres"
     */
    readonly "database"?: string;

    /**
     * Default: "postgres"
     */
    readonly "user"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    /**
     * Default: "disable"
     */
    readonly "ssl"?: "allow" | "disable" | "require";

    /**
     * Default: 5432
     */
    readonly "port"?: number;

    readonly __name: "timescaleDb";
}
