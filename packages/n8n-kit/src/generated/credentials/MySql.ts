// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MySql.credentials.ts' credentials

export const name = "mySql" as const;

/**
 * displayName: MySQL
 * documentationUrl: mysql
 */
export interface MySqlCredentials {
    /** Default: "localhost" */
    readonly "host"?: string;

    /** Default: "mysql" */
    readonly "database"?: string;

    /** Default: "mysql" */
    readonly "user"?: string;

    /** Type options: {"password":true} */
    readonly "password"?: string;

    /** Default: 3306 */
    readonly "port"?: number;

    /**
     * The milliseconds before a timeout occurs during the initial connection to the MySQL server
     * Default: 10000
     */
    readonly "connectTimeout"?: number;

    readonly "ssl"?: boolean;

    /** Type options: {"password":true} */
    readonly "caCertificate"?: string;

    /** Type options: {"password":true} */
    readonly "clientPrivateKey"?: string;

    /** Type options: {"password":true} */
    readonly "clientCertificate"?: string;

    readonly "sshTunnel"?: boolean;

    /** Default: "password" */
    readonly "sshAuthenticateWith"?: "password" | "privateKey";

    /** Default: "localhost" */
    readonly "sshHost"?: string;

    /** Default: 22 */
    readonly "sshPort"?: number;

    /** Default: "root" */
    readonly "sshUser"?: string;

    /** Type options: {"password":true} */
    readonly "sshPassword"?: string;

    /** Type options: {"rows":4,"password":true} */
    readonly "privateKey"?: string;

    /** Passphrase used to create the key, if no passphrase was used leave empty */
    readonly "passphrase"?: string;

    readonly __name: "mySql";
}
