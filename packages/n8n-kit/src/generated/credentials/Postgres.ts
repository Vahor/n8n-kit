// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Postgres.credentials.ts' credentials

export const name = "postgres" as const;

/**
 * displayName: Postgres
 * documentationUrl: postgres
 */
export interface PostgresCredentials {
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
     * Make sure this value times the number of workers you have is lower than the maximum number of connections your postgres instance allows.
     * Default: 100
     */
    readonly "maxConnections"?: number;

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

    readonly "sshTunnel"?: boolean;

    /**
     * Default: "password"
     */
    readonly "sshAuthenticateWith"?: "password" | "privateKey";

    /**
     * Default: "localhost"
     */
    readonly "sshHost"?: string;

    /**
     * Default: 22
     */
    readonly "sshPort"?: number;

    /**
     * Default: "root"
     */
    readonly "sshUser"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "sshPassword"?: string;

    /**
     * Type options: {"rows":4,"password":true}
     */
    readonly "privateKey"?: string;

    /**
     * Passphrase used to create the key, if no passphrase was used leave empty
     */
    readonly "passphrase"?: string;

    readonly __name: "postgres";
}
