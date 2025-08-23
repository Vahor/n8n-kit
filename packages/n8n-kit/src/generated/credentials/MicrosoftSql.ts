// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftSql.credentials.ts' credentials

export const name = "microsoftSql" as const;

/**
 * displayName: Microsoft SQL
 * documentationUrl: microsoftSql
 */
export interface MicrosoftSqlCredentials {

    /**
     * Default: "localhost"
     */
    readonly "server"?: string;

    /**
     * Default: "master"
     */
    readonly "database"?: string;

    /**
     * Default: "sa"
     */
    readonly "user"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     * Default: 1433
     */
    readonly "port"?: number;

    /**
     */
    readonly "domain"?: string;

    /**
     * Default: true
     */
    readonly "tls"?: boolean;

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    /**
     * Connection timeout in ms
     * Default: 15000
     */
    readonly "connectTimeout"?: number;

    /**
     * Request timeout in ms
     * Default: 15000
     */
    readonly "requestTimeout"?: number;

    /**
     * The version of TDS to use. If server doesn't support specified version, negotiated version is used instead.
     * Default: "7_4"
     */
    readonly "tdsVersion"?: "7_4" | "7_3_B" | "7_3_A" | "7_2" | "7_1";

    readonly __name: "microsoftSql";

}
