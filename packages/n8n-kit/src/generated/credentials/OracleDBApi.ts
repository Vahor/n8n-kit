// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/OracleDBApi.credentials.ts' credentials

export const name = "oracleDBApi" as const;

/**
 * displayName: Oracle Database Credentials API
 * documentationUrl: oracledb
 */
export interface OracleDBApiCredentials {
    readonly "user"?: string;

    /** Type options: {"password":true} */
    readonly "password"?: string;

    /**
     * The Oracle database instance to connect to
     * Default: "localhost/orcl"
     */
    readonly "connectionString"?: string;

    /** The privilege to use when connecting to the database */
    readonly "privilege"?: 32768 | 131072 | 2 | 262144 | 524288 | 4 | 8 | 1048576;

    /** Define type of connection with database */
    readonly "useThickMode"?: boolean;

    /** SSL connection with database */
    readonly "useSSL"?: boolean;

    /**
     * The password to decrypt the Privacy Enhanced Mail (PEM)-encoded private certificate, if it is encrypted
     * Type options: {"password":true}
     */
    readonly "walletPassword"?: string;

    /** The security credentials required to establish a mutual TLS (mTLS) connection to Oracle Database */
    readonly "walletContent"?: string;

    /** The distinguished name (DN) that should be matched with the certificate DN */
    readonly "sslServerCertDN"?: string;

    /**
     * Whether the server certificate DN should be matched in addition to the regular certificate verification that is performed
     * Default: true
     */
    readonly "sslServerDNMatch"?: boolean;

    /** Whether the secure DN matching behavior which checks both the listener and server certificates has to be performed */
    readonly "sslAllowWeakDNMatch"?: boolean;

    /** The number of connections established to the database when a pool is created */
    readonly "poolMin"?: number;

    /**
     * The maximum number of connections to which a connection pool can grow
     * Default: 4
     */
    readonly "poolMax"?: number;

    /**
     * The number of connections that are opened whenever a connection request exceeds the number of currently open connections
     * Default: 1
     */
    readonly "poolIncrement"?: number;

    /** The number of seconds that a pooled connection can exist in a pool after first being created */
    readonly "maxLifetimeSession"?: number;

    /**
     * The number of seconds after which idle connections (unused in the pool) may be terminated
     * Default: 60
     */
    readonly "poolTimeout"?: number;

    /** DRCP/PRCP Connection Class */
    readonly "connectionClass"?: string;

    /** The timeout duration in seconds for an application to establish an Oracle Net connection */
    readonly "connectTimeout"?: number;

    /**
     * The maximum number of seconds to wait to establish a connection to the database host
     * Default: 20
     */
    readonly "transportConnectTimeout"?: number;

    /**
     * The number of minutes between the sending of keepalive probes
     * Type options: {"minValue":0}
     */
    readonly "expireTime"?: number;

    readonly __name: "oracleDBApi";
}
